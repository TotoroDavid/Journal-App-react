import { createSlice } from '@reduxjs/toolkit';

export const journalSlice = createSlice({
    name: 'journal',
    initialState: {
        isSaving: false, //true, false
        messageSaved: '',
        notes: [],
        active: null
        /** active:{
         * id: 'abcde',
         * title:'',
         * body:'',
         * date:123456,
         * imageUrls:[], //https://foto1.jpg, https://foto2.jpg, https://foto3.jpg,
         * }
         */
    },
    reducers: {
        savingNewNote: (state) => {
            state.isSaving = true
        },
        addNewEmptyNote: (state, action) => {
            state.notes.push(action.payload)
            state.isSaving = false
        },
        setActiveNote: (state, action) => {
            state.active = action.payload
            state.messageSaved = ''
        },
        setNotes: (state, action) => {
            state.notes = action.payload
        },
        setSaving: (state, action) => {
            state.isSaving = true
            state.messageSaved = ''
        },
        upDateNote: (state, action) => { //payload: note
            state.isSaving = false
            state.notes = state.notes.map(note => {

                if (note.id === action.payload.id) {
                    return action.payload
                }
                return note
            })
            state.messageSaved = `${action.payload.title}, update correctly.!!`
        },
        setPhotosToActiveNote: (state, action) => {
            state.active.imageUrls = [...state.active.imageUrls, ...action.payload]
            state.isSaving = false
        },
        clearNotesLogout: (state, action) => { //para cuando le demos logout limpie el firebase
            state.isSaving = false
            state.messageSaved = ''
            state.notes = []
            state.active = 'null'
        },
        deleteNoteById: (state, action) => {
            state.active = 'null'
            state.notes = state.notes.filter(note => note.id !== action.payload)
            // return {
            //     ...state,
            //     active: null,
            //     notes: state.notes.filter(note => note.id !== action.payload)
            // }
        },
    }
})

//actions creator are generated for each case reducer function
export const {
    savingNewNote,
    addNewEmptyNote,
    setActiveNote,
    setNotes,
    setSaving,
    upDateNote,
    deleteNoteById,
    setPhotosToActiveNote,
    clearNotesLogout,
} = journalSlice.actions