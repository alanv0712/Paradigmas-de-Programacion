import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCL_tqsvougRIr1rQzDradXk1-DQzyKVmk",
    authDomain: "segundo-parcial-65a44.firebaseapp.com",
    projectId: "segundo-parcial-65a44",
    storageBucket: "segundo-parcial-65a44.appspot.com",
    messagingSenderId: "854466050707",
    appId: "1:854466050707:web:ee4b2bbdb04a526e9a6b66"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()