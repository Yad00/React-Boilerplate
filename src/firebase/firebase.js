import { initializeApp } from 'firebase/app';
import {getDatabase, ref, set, remove, update, get, onValue, onChildRemoved, onChildChanged, onChildAdded, push} from 'firebase/database';
import { GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';

const firebaseApp = initializeApp({
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  databaseURL: process.env.FIREBASE_DATABASE_URL,
  projectId: process.env.FIREBASE_PROJECT_ID,
  storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.FIREBASE_APP_ID
});

const db = getDatabase(firebaseApp);
const googleAuthProvider = new GoogleAuthProvider();
const auth = getAuth();

export {
  db,
  ref,
  set,
  remove,
  update,
  get,
  onValue,
  onChildRemoved,
  onChildChanged,
  onChildAdded,
  push,
  googleAuthProvider,
  auth,
  signInWithPopup
};