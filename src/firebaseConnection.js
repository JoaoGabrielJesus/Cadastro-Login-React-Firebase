import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


let firebaseConfig = {
  apiKey: "AIzaSyAgHGxm8ZSoi-MOwcDSEp57hWQYpOsitXs",
  authDomain: "curso-71cfb.firebaseapp.com",
  projectId: "curso-71cfb",
  storageBucket: "curso-71cfb.appspot.com",
  messagingSenderId: "288970648462",
  appId: "1:288970648462:web:4f190448862b8f5f6392df",
  measurementId: "G-C6VNC4BVLQ"
};


if(!firebase.apps.length){
firebase.initializeApp(firebaseConfig);
}

export default firebase;