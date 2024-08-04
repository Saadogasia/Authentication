// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAD2tCrZwxVQ8TeyZ06RJSdWDN4aYie1_o",
  authDomain: "alfallah-93c82.firebaseapp.com",
  projectId: "alfallah-93c82",
  storageBucket: "alfallah-93c82.appspot.com",
  messagingSenderId: "387253770174",
  appId: "1:387253770174:web:dcc5e807694c26db3d4bef",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
