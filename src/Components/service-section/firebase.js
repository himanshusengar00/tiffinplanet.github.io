import firebase from "firebase";

var firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyBtOOVFFCOV9eBu0G5_C-WfOdjHFCKwpmg",
    authDomain: "tiffinplanet-527d7.firebaseapp.com",
    databaseURL: "https://tiffinplanet-527d7-default-rtdb.firebaseio.com",
    projectId: "tiffinplanet-527d7",
    storageBucket: "tiffinplanet-527d7.appspot.com",
    messagingSenderId: "939858845636"
});

var db = firebaseApp.firestore();

export {db};

