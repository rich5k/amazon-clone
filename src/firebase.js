import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyD28LnNpH0wUoucP6w68lfCXNUR3M5joYE",
    authDomain: "clone-a7207.firebaseapp.com",
    databaseURL: "https://clone-a7207.firebaseio.com",
    projectId: "clone-a7207",
    storageBucket: "clone-a7207.appspot.com",
    messagingSenderId: "285051832216",
    appId: "1:285051832216:web:9f588aab67c5ed8e9f8ded",
    measurementId: "G-77GYX6ST8P"
  };

const firebaseApp= firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth};