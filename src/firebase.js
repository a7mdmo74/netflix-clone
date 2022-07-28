// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDJuGomNDWvW6vkgBVR6k9vgeJyoOw-hSU",
  authDomain: "netflix-tailwind-8e7c6.firebaseapp.com",
  projectId: "netflix-tailwind-8e7c6",
  storageBucket: "netflix-tailwind-8e7c6.appspot.com",
  messagingSenderId: "845831249131",
  appId: "1:845831249131:web:3f074f439d49fd572d32ae",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
