import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBT-xk4BVn8smL2aoYaKJYN2Mz2ic9Htjw",
  authDomain: "ruralnomics-5a795.firebaseapp.com",
  databaseURL: "https://ruralnomics-5a795-default-rtdb.firebaseio.com",
  projectId: "ruralnomics-5a795",
  storageBucket: "ruralnomics-5a795.appspot.com",
  messagingSenderId: "280722155680",
  appId: "1:280722155680:web:a5d0a5d0a35ab377f001c5",
  measurementId: "G-HF3766Y86P"
};


firebase.initializeApp(firebaseConfig);
firebase.firestore();