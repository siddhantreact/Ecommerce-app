
 import {initializeApp} from "firebase/app"

import {getAuth} from "firebase/auth"


const firebaseConfig = {
  apiKey: "AIzaSyBBDc4257VL459rrR4ZELetQ-BnP2dBn8U",
  authDomain: "ecommerce--clone-3d46c.firebaseapp.com",
  projectId: "ecommerce--clone-3d46c",
  storageBucket: "ecommerce--clone-3d46c.appspot.com",
  messagingSenderId: "1064511533515",
  appId: "1:1064511533515:web:941cd31ac47f8a7148464e",
  measurementId: "G-KW6EFLH282"
};


 const app = initializeApp(firebaseConfig);

 

const auth = getAuth()

export {app,auth}