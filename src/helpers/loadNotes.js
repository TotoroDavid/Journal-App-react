import { collection, getDocs } from "firebase/firestore/lite"
import { firebaseDB } from "../firebase/config"

export const loadNotes = async (uid = '') => {
    if (!uid) throw new Error(`The Uid doesn't exist.`)

    const collectionRef = collection(firebaseDB, `${uid}/journal/notes`)
    const docs = await getDocs(collectionRef)

    const notes = []
    docs.forEach(doc => {
        notes.push({
            id: doc.id,
            ...doc.data()
        })
    })
    // console.log(notes)
    return notes

}

/**
ForEach() ejecuta la función callback una vez por cada elemento del array
 */