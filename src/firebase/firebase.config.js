// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCANAXRc6_j74SXUzV8GEHGAus_kX6fzX0",
  authDomain: "b8a11-client-side.firebaseapp.com",
  projectId: "b8a11-client-side",
  storageBucket: "b8a11-client-side.appspot.com",
  messagingSenderId: "966833473099",
  appId: "1:966833473099:web:36f720bf6152d8cddeefce"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;