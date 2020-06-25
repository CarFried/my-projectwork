import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const app = firebase.initializeApp({
    apiKey: "AIzaSyBuZ4CU0kUfI3V8r_kCIXUPaBdsmKu3TN4",
    authDomain: "travelblog-e6430.firebaseapp.com",
    databaseURL: "https://travelblog-e6430.firebaseio.com",
    projectId: "travelblog-e6430",
    storageBucket: "travelblog-e6430.appspot.com",
    messagingSenderId: "24615620847",
    appId: "1:24615620847:web:5fe6291c80cefcc69e8b1a"
  });

  export default app;

