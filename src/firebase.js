import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAXaCyM5E2H_W0wjjrvYzDz8sYvseMgxqE",
    authDomain: "facebook-clone-62a30.firebaseapp.com",
    projectId: "facebook-clone-62a30",
    storageBucket: "facebook-clone-62a30.appspot.com",
    messagingSenderId: "121237569922",
    appId: "1:121237569922:web:d8ff88f49c971f028acf9b",
    measurementId: "G-Y9JCC3CZS7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
