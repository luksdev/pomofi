import * as firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import { initializeApp } from "firebase/app";

// PRODUÇÂO
// const config = {
//   apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
//   authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
//   projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
//   storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
//   messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
//   appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
// };

const config = {
  apiKey: "AIzaSyBKUWwL-YgtduqoHxv2bVYE6WK6vIKcy6I",
  authDomain: "pomofi-project.firebaseapp.com",
  projectId: "pomofi-project",
  storageBucket: "pomofi-project.appspot.com",
  messagingSenderId: "212397295009",
  appId: "1:212397295009:web:b0a236d27651e4a48877e0",
};

export const app = initializeApp(config);
export const auth = getAuth(app);

export default firebase;
