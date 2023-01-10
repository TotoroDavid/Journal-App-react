
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore/lite'

const firebaseConfig = {
    apiKey: "AIzaSyDRL77nDTVDJhlvcETDVqygkToqgEZUINQ",
    authDomain: "react-course-85c74.firebaseapp.com",
    projectId: "react-course-85c74",
    storageBucket: "react-course-85c74.appspot.com",
    messagingSenderId: "479587111694",
    appId: "1:479587111694:web:0e4602797cb0ef8cd2fd5f"
};

export const firebaseApp = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(firebaseApp)
export const firebaseDB = getFirestore(firebaseApp)