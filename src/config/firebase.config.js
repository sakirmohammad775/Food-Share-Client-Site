// Import the functions you need from the SDKs you need
import{getAuth} from 'firebase/auth';
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCzl6kktJdlve2FEn2mT1l6MQm1ovWed9s",
  authDomain: "food-share-client-c8d1c.firebaseapp.com",
  projectId: "food-share-client-c8d1c",
  storageBucket: "food-share-client-c8d1c.appspot.com",
  messagingSenderId: "322077819042",
  appId: "1:322077819042:web:0fe432c6f7e8920bc997fb"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth(app)