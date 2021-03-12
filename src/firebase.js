import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyAiVf6nXA0dWGX4dsn6JNHAlHmRAn7M7NY",
  authDomain: "netflix-clone-7df6d.firebaseapp.com",
  projectId: "netflix-clone-7df6d",
  storageBucket: "netflix-clone-7df6d.appspot.com",
  messagingSenderId: "147995063591",
  appId: "1:147995063591:web:582f5897e098c7be4b2502",
  measurementId: "G-TJ46M6P4V9"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db=firebaseApp.firestore();
const auth= firebase.auth();

export { auth };
export default db;