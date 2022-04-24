import firebase from 'firebase/app';

import 'firebase/analytics';
import 'firebase/auth';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: "AIzaSyD-IBZSXqJK7MVkt978qc6-fInwl87zhCQ",
  authDomain: "chat-app-f0076.firebaseapp.com",
  projectId: "chat-app-f0076",
  storageBucket: "chat-app-f0076.appspot.com",
  messagingSenderId: "838442737799",
  appId: "1:838442737799:web:c1c080490f034f2ad31822",
  measurementId: "G-2BT3N19QQV"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
