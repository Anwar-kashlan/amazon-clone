import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyBWEV-QgN7-Ia1JkaH1uu-kvM_sRfMxpDA",
  authDomain: "clone-48d91.firebaseapp.com",
  projectId: "clone-48d91",
  storageBucket: "clone-48d91.appspot.com",
  messagingSenderId: "1055482814491",
  appId: "1:1055482814491:web:fdc9baaf86e9899998d8be",
  measurementId: "G-Y4WXBC1FT0",
};
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
