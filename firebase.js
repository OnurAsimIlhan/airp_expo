// Import the functions you need from the SDKs you need
import * as firebase from "firebase";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import 'firebase/firestore'
import 'firebase/storage'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAPwq81a67Mr-GlTkftGDKGY09mcE2E5J4",
  authDomain: "airpreneursfb.firebaseapp.com",
  projectId: "airpreneursfb",
  storageBucket: "airpreneursfb.appspot.com",
  messagingSenderId: "792551644757",
  appId: "1:792551644757:web:ca3a1d0142c66724b8bedc",
  measurementId: "G-7FHDKMGFX6"
};

// Initialize Firebase
let app;
if (firebase.apps.length === 0) {
  app = firebase.initializeApp(firebaseConfig);
} else {
  app = firebase.app()
}

const auth = firebase.auth();
const db = firebase.firestore();  
const str = firebase.storage();
export {auth, db, str};