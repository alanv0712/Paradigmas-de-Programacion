import firebase from 'firebase/app'
import "firebase/firestore"

var firebaseConfig = {
    apiKey: "AIzaSyCBXGSpUk49B0lQFj1WH6c0KRBpy1qeMhE",
    authDomain: "tercer-parcial-d2e63.firebaseapp.com",
    projectId: "tercer-parcial-d2e63",
    storageBucket: "tercer-parcial-d2e63.appspot.com",
    messagingSenderId: "547767465722",
    appId: "1:547767465722:web:df85f3f5ee540f21723b43"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
export const db = firebase.firestore()