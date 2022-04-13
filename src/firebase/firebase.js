import * as firebase from "firebase/app";

import "firebase/auth";
import { getAuth } from "firebase/auth";
import "firebase/firestore";
import "firebase/functions";

const config = {
  apiKey: "AIzaSyBKUWwL-YgtduqoHxv2bVYE6WK6vIKcy6I",
  authDomain: "pomofi-project.firebaseapp.com",
  projectId: "pomofi-project",
  storageBucket: "pomofi-project.appspot.com",
  messagingSenderId: "212397295009",
  appId: "1:212397295009:web:b0a236d27651e4a48877e0",
};

export const app = firebase.initializeApp(config);
export const auth = getAuth(app);
// export const firestore = firebase.firestore();
// export const functions = firebase.functions();

export default firebase;
