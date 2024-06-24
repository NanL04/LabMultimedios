import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBsUvXACOBwTZiVUcoG5UpJjb5voFJwVcc",
  authDomain: "app-fruit-edaee.firebaseapp.com",
  projectId: "app-fruit-edaee",
  storageBucket: "app-fruit-edaee.appspot.com",
  messagingSenderId: "208884846428",
  appId: "1:208884846428:web:58c2904fbe11d811293b99"
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
