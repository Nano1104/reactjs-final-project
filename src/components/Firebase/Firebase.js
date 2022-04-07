// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAftrB4VrZM0sWQXXi5cZAvzaSmi53E6vE",
  authDomain: "joyas-gil.firebaseapp.com",
  projectId: "joyas-gil",
  storageBucket: "joyas-gil.appspot.com",
  messagingSenderId: "342058896830",
  appId: "1:342058896830:web:8613d764169c4ec6753def"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db=getFirestore(app)