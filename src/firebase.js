import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyBb4j9tT1vV2XQNSBtD2mLNY9rzfikAvHY",
  authDomain: "c2c-club.firebaseapp.com",
  projectId: "c2c-club",
  storageBucket: "c2c-club.appspot.com",
  messagingSenderId: "738730871746",
  appId: "1:738730871746:web:31037555367e190263a45b"
};


const app = initializeApp(firebaseConfig);
const db = getFirestore(app)


const firebaseCon = {
  apiKey: "AIzaSyB4P-BOs9T9DJi9_d3EteviHASsj5457GA",
  authDomain: "c2cweb-72239.firebaseapp.com",
  projectId: "c2cweb-72239",
  storageBucket: "c2cweb-72239.appspot.com",
  messagingSenderId: "1086090510593",
  appId: "1:1086090510593:web:addd37cd0d1ef7b6b51b00"
};

// Initialize Firebase
const apps = initializeApp(firebaseConfig);
export const dbs = getFirestore(app);
export default db;
