// For Firebase JS SDK v7.20.0 and later, measurementId is optional
//write this line
//writing these import lines externally from stackoverflow
import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyDDwBFCczkjYZUHtPG-NK1BBR0gjat0T1c",
    authDomain: "challenge-c2c10.firebaseapp.com",
    projectId: "challenge-c2c10",
    storageBucket: "challenge-c2c10.appspot.com",
    messagingSenderId: "948865986468",
    appId: "1:948865986468:web:49a40b2cfe05aa448b9b31",
    measurementId: "G-TGM7X4P6SP"
  };
  //write these line
  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db=firebaseApp.firestore();
  const auth=firebase.auth();

  export {db,auth};