// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBhFCoXMxgrNSL3JXoNQfWgFD6K_xdyhRM",
  authDomain: "assignment10-petsdoctor.firebaseapp.com",
  projectId: "assignment10-petsdoctor",
  storageBucket: "assignment10-petsdoctor.appspot.com",
  messagingSenderId: "478474892494",
  appId: "1:478474892494:web:0b22e478bc6e07a9ab0c9f"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;