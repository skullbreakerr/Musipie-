import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import {getAuth} from 'firebase/auth';
// https://firebase.google.com/docs/web/setup#available-libraries 
const firebaseConfig = {
  apiKey: "AIzaSyAVPfGofpuzwmvkFvBoUN8Qd0aUZA0Agaw",
  authDomain: "fir-tutorial-71007.firebaseapp.com",
  databaseURL: "https://fir-tutorial-71007-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "fir-tutorial-71007",
  storageBucket: "fir-tutorial-71007.appspot.com",
  messagingSenderId: "350006866149",
  appId: "1:350006866149:web:283a8e47070cb98e06240c",
  measurementId: "G-84Y03WC9YV"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);