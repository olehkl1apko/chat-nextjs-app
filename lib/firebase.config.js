import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "chat-nextjs-app-b724c.firebaseapp.com",
  projectId: "chat-nextjs-app-b724c",
  storageBucket: "chat-nextjs-app-b724c.appspot.com",
  messagingSenderId: "207834522848",
  appId: "1:207834522848:web:98c930125a03a587125c85",
  //   measurementId: "G-L12R3QZJ53",
};

const app = initializeApp(firebaseConfig);
const firestore = getFirestore(app);
const auth = getAuth(app);

export { app, firestore, auth };