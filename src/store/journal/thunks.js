import { collection, deleteDoc, doc, setDoc } from "firebase/firestore/lite"
import { firebaseDB } from "../../firebase/config"
import { fileUpload } from "../../helpers/fileUpload"
import { loadNotes } from "../../helpers/loadNotes"
import { addNewEmptyNote, setActiveNote, savingNewNote, setNotes, setSaving, upDateNote, setPhotosToActiveNote, deleteNoteById } from "./journalSlice"

export const startNewNote = () => {
    return async (dispatch, getState) => {

        dispatch(savingNewNote())
        const { uid } = getState().auth //node of Auth store
        // console.log({ uid })

        const newNote = {
            title: '',
            body: '',
            imageUrls: [],
            date: new Date().getTime(),
        }

        const newDoc = doc(collection(firebaseDB, `${uid}/journal/notes`))
        await setDoc(newDoc, newNote)
        // console.log({ newDoc, setDocResp });
        newNote.id = newDoc.id

        dispatch(addNewEmptyNote(newNote))
        dispatch(setActiveNote(newNote))
    }
}

export const startLoadingNotes = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth
        if (!uid) throw new Error(`The Uid doesn't exist.`)
        const notes = await loadNotes(uid)

        dispatch(setNotes(notes))
    }
}

export const startSavingNote = () => {
    return async (dispatch, getState) => { //getState for take something of the store

        dispatch(setSaving)

        const { uid } = getState().auth
        const { active: note } = getState().journal

        const noteToFireStore = { ...note }
        delete noteToFireStore.id
        // console.log(noteToFireStore)
        const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`)
        await setDoc(docRef, noteToFireStore, { merge: true })

        dispatch(upDateNote(note))//update the notes when I select and text something different
    }
}

export const startUploadingFiles = (files = []) => {
    return async (dispatch, getState) => {
        dispatch(setSaving)
        // await fileUpload(files[0]) //para subir solo de a una imagen!!

        const fileUploadPromise = []
        for (const file of files) {
            fileUploadPromise.push(fileUpload(file))
        }

        const photosUrls = await Promise.all(fileUploadPromise)
        // console.log(photosUrls)
        dispatch(setPhotosToActiveNote(photosUrls))
    }
}

export const startDeletingNote = () => {
    return async (dispatch, getState) => {

        const { uid } = getState().auth;
        const { active: note } = getState().journal;

        const docRef = doc(firebaseDB, `${uid}/journal/notes/${note.id}`);
        await deleteDoc(docRef);

        dispatch(deleteNoteById(note.id));

    }
}
