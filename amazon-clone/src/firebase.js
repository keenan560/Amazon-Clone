import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyBV__m9T1hPEoVXsfA8pSt9P-lPWi8yjqE",
    authDomain: "challenge-7803c.firebaseapp.com",
    databaseURL: "https://challenge-7803c.firebaseio.com",
    projectId: "challenge-7803c",
    storageBucket: "challenge-7803c.appspot.com",
    messagingSenderId: "951233283091",
    appId: "1:951233283091:web:33194cdce5dea252842be6",
    measurementId: "G-DYYP1YVRBE"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

const auth = firebase.auth();   

export {db, auth};