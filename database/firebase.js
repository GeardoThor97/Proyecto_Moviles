import firebase from "firebase";
import "firebase/firestore";


var firebaseConfig = {
    apiKey: "AIzaSyCfItSSJdcf7K4RWK9r0LiNBhE6mnQmpgI",
    authDomain: "prueba-firebase-ef17c.firebaseapp.com",
    projectId: "prueba-firebase-ef17c",
    storageBucket: "prueba-firebase-ef17c.appspot.com",
    messagingSenderId: "208101506625",
    appId: "1:208101506625:web:e2b274fdd40149236690c0"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const db = firebase.firestore()

  export default {
      firebase,
        db,
  }