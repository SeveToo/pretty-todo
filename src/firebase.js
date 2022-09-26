// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCt4fgo56QpJN_MtVQcNQZhAd7GZQRe2_c",
  authDomain: "todo-cb7ee.firebaseapp.com",
  projectId: "todo-cb7ee",
  storageBucket: "todo-cb7ee.appspot.com",
  messagingSenderId: "483632640825",
  appId: "1:483632640825:web:37aaef32ecb53af815aee8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;