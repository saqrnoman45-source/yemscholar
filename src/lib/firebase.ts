import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "yemscholar.firebaseapp.com",
  projectId: "yemscholar",
  storageBucket: "yemscholar.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:12345:web:abcde"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
