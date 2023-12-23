// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAoUtA368fxUGpZtbTjFt91uybjEeE1yxg",
  authDomain: "discard-clone-4ecee.firebaseapp.com",
  projectId: "discard-clone-4ecee",
  storageBucket: "discard-clone-4ecee.appspot.com",
  messagingSenderId: "1088422379691",
  appId: "1:1088422379691:web:820b9ca7bb012821d177ee",
  measurementId: "G-RDRLT82SSD",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
