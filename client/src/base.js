import firebase from 'firebase/compat/app'
import 'firebase/compat/auth'

export const app = firebase.initializeApp({

    apiKey: "AIzaSyCmKOiDGTsOBjn5y_E7YDON_RLBtj0RsrI",
    authDomain: "mern-banking.firebaseapp.com",
    databaseURL: "https://mern-banking-default-rtdb.firebaseio.com",
    projectId: "mern-banking",
    storageBucket: "mern-banking.appspot.com",
    messagingSenderId: "356090773476",
    appId: "1:356090773476:web:beac32a04c981de6ef11f1",
    measurementId: "G-YMBXD4LFNR"
    
  });

console.log(app)
export const auth = app.auth()