// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA8unLSIW6NvjbxQFtI1azA3gragClKzI0",
  authDomain: "fight-90ed3.firebaseapp.com",
  projectId: "fight-90ed3",
  storageBucket: "fight-90ed3.firebasestorage.app",
  messagingSenderId: "624089056131",
  appId: "1:624089056131:web:c5d52c8cd03e0063a1ecb6",
  measurementId: "G-8HMCJ9GE2Z"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);