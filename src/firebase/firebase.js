import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDIvvadddbkpP_u7pADH1QjFdIoqQxXjao",
  authDomain: "chat-app-8668f.firebaseapp.com",
  projectId: "chat-app-8668f",
  storageBucket: "chat-app-8668f.firebasestorage.app",
  messagingSenderId: "503628605141",
  appId: "1:503628605141:web:5190aec128a67032d3e45c"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };