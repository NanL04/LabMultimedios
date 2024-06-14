import { getApp, getApps, initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'

// Firebase configuration

const firebaseConfig = {

  apiKey: "AIzaSyBsUvXACOBwTZiVUcoG5UpJjb5voFJwVcc",

  authDomain: "app-fruit-edaee.firebaseapp.com",

  projectId: "app-fruit-edaee",

  storageBucket: "app-fruit-edaee.appspot.com",

  messagingSenderId: "208884846428",

  appId: "1:208884846428:web:58c2904fbe11d811293b99"

};



// Initialize Firebase for SSR
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp()

// Initialize Firebase services
const firestore = getFirestore(app)
const auth = getAuth(app)

export { app, firestore, auth }
