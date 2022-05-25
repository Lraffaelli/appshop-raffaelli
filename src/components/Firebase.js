import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCuDIyVy5jnPOrBqMTgVKxx2Uz2g5kbgDY",
  authDomain: "app-shopcoder.firebaseapp.com",
  projectId: "app-shopcoder",
  storageBucket: "app-shopcoder.appspot.com",
  messagingSenderId: "291859681124",
  appId: "1:291859681124:web:3f04d51deaf1d84290f471"
};


const app = initializeApp(firebaseConfig);

export const db= getFirestore(app)