import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyC8Nn_a3oKfC6IxXhOmOianGDda3HO8D0A",
    authDomain: "clone-c6930.firebaseapp.com",
    projectId: "clone-c6930",
    storageBucket: "clone-c6930.appspot.com",
    messagingSenderId: "1037007340477",
    appId: "1:1037007340477:web:589649193c804b5602c8d4",
    measurementId: "G-LNDVX310VT"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };