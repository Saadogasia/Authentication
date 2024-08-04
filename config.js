// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: {yourdata}, 
  authDomain: {yourdata},
  projectId: {yourdata},
  storageBucket: {yourdata},
  messagingSenderId: {yourdata},
  appId: {yourdata},
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
export default app;
