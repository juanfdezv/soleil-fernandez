import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCIp_pDGKWHEnp-UgFtN6vBMpBuf8L2Uyk",
  authDomain: "soleil-175b6.firebaseapp.com",
  projectId: "soleil-175b6",
  storageBucket: "soleil-175b6.appspot.com",
  messagingSenderId: "1086816953919",
  appId: "1:1086816953919:web:58e6564b431e61f1ddfa8a"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);