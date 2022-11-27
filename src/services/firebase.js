import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBGYeTrPG4SsWCKO7N4U7A5c3suS5WYJ8w",
  authDomain: "netflix-clone-f18c1.firebaseapp.com",
  projectId: "netflix-clone-f18c1",
  storageBucket: "netflix-clone-f18c1.appspot.com",
  messagingSenderId: "275660285477",
  appId: "1:275660285477:web:07770120458e61336b81cc",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
