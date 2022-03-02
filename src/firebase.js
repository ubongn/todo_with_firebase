import firebase from 'firebase/compat/app';
//import 'firebase/compat/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDcxcDduYCYfeehzhQW6HR2_uxABwbVLaQ",
  authDomain: "todo-d21f1.firebaseapp.com",
  projectId: "todo-d21f1",
  storageBucket: "todo-d21f1.appspot.com",
  messagingSenderId: "349548992173",
  appId: "1:349548992173:web:aa615c658106a044ed5824"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();


export { db };







