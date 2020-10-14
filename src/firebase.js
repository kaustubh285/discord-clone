import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDGzYeLHcU9HqpfrcU-4TYUXC1aY5DhkWw",
  authDomain: "discord-clone-b97e1.firebaseapp.com",
  databaseURL: "https://discord-clone-b97e1.firebaseio.com",
  projectId: "discord-clone-b97e1",
  storageBucket: "discord-clone-b97e1.appspot.com",
  messagingSenderId: "1074887178480",
  appId: "1:1074887178480:web:ffb79771f0df727fc76a35",
  measurementId: "G-6165JS7GFX",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };

export default db;
