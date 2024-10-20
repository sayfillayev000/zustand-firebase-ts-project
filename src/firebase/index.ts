import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCuw2QaNYUQuzTyxc5lc9SEL8fkCvm0zfA",
  authDomain: "my-auth-d297b.firebaseapp.com",
  projectId: "my-auth-d297b",
  storageBucket: "my-auth-d297b.appspot.com",
  messagingSenderId: "804304253677",
  appId: "1:804304253677:web:afb046daf533ddbb8d92e4",
};

export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
export const auth = getAuth();
export const db = getFirestore();
