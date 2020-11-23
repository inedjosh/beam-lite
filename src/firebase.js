import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCMYCswfRddZ6kDjowbC-TZu9P2pKqOgbk",
  authDomain: "trohan-go.firebaseapp.com",
  databaseURL: "https://trohan-go.firebaseio.com",
  projectId: "trohan-go",
  storageBucket: "trohan-go.appspot.com",
  messagingSenderId: "1056246339148",
  appId: "1:1056246339148:web:5949dae5a63095399146e9",
  measurementId: "G-FFX8774PF1"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };