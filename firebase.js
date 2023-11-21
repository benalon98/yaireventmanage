import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBvFt3VeNej4h1G7OLCd_BuuLay6ye_tr4",
  authDomain: "yairevent.firebaseapp.com",
  projectId: "yairevent",
  storageBucket: "yairevent.appspot.com",
  messagingSenderId: "1916874660",
  appId: "1:1916874660:web:10e5c17ffdaa4277875b31",
  measurementId: "G-23JFVEPC01",
};
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
