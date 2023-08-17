import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyAzixWyrAqZcOCbBRxeOaRt5fDKXnUjjYM',
  authDomain: 'mail-clone-4ab5d.firebaseapp.com',
  projectId: 'mail-clone-4ab5d',
  storageBucket: 'mail-clone-4ab5d.appspot.com',
  messagingSenderId: '835256512598',
  appId: '1:835256512598:web:f05b6a45a2636e85dacbf7',
  measurementId: 'G-1R6573WJKQ',
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
