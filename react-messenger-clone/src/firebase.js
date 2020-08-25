import firebase from "firebase";

const firebaseApp = firebase.initializeApp ({
  apiKey: "AIzaSyCzBLTktiJ83wwbm_mIVyk7fwCigS66nvk",
  authDomain: "react-messenger-clone-5c8a0.firebaseapp.com",
  databaseURL: "https://react-messenger-clone-5c8a0.firebaseio.com",
  projectId: "react-messenger-clone-5c8a0",
  storageBucket: "react-messenger-clone-5c8a0.appspot.com",
  messagingSenderId: "52569317897",
  appId: "1:52569317897:web:f04676456a7fa0e736ced8",
  measurementId: "G-BB0M2VB81T"
});

const db = firebaseApp.firestore();

export default db;
