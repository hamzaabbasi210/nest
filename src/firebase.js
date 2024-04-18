// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDswJLOk3wogP9gwDkBLQ2kTSahsjfQbnk",
  authDomain: "nest-3d206.firebaseapp.com",
  projectId: "nest-3d206",
  storageBucket: "nest-3d206.appspot.com",
  messagingSenderId: "266172422507",
  appId: "1:266172422507:web:d90fe410689ca343f7142e",
  measurementId: "G-HPJ9X2KJ6J"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);