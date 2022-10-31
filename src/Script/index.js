// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0d-4rlHdp1jt0lrSie-S8kuw__NvBuZs',
  authDomain: 'altschool-examination.firebaseapp.com',
  projectId: 'altschool-examination',
  storageBucket: 'altschool-examination.appspot.com',
  messagingSenderId: '438548959328',
  appId: '1:438548959328:web:490eb4dfc24324f64db305',
};

const auth = getAuth();
const provider = new GoogleAuthProvider();

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export { auth, provider, signInWithRedirect };
