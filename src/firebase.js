
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDbHMP521yv-iiZSv4ZOkJY2pldw8VYBbU",
  authDomain: "cartrevision.firebaseapp.com",
  projectId: "cartrevision",
  storageBucket: "cartrevision.appspot.com",
  messagingSenderId: "340570526227",
  appId: "1:340570526227:web:7b525053b2919c21cee5e6"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
firebase.initializeApp(firebaseConfig);

export const firestore = firebase.firestore();