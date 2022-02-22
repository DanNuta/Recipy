import firebase from "firebase/app";
import "firebase/firestore";


const firebaseConfig = {
    apiKey: "AIzaSyAzvsZileHxiU89oC6I5xdNosttf8c-NCM",
    authDomain: "cooking-c33d2.firebaseapp.com",
    projectId: "cooking-c33d2",
    storageBucket: "cooking-c33d2.appspot.com",
    messagingSenderId: "512717775618",
    appId: "1:512717775618:web:5744a09815276a10b0181b"
  };

  //init firebase

  firebase.initializeApp(firebaseConfig);


  //init services
  const projectFirestore = firebase.firestore();

  export {projectFirestore}