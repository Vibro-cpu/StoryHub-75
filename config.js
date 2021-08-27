import firebase from 'firebase'
require("@firebase/firestore")


// Initialize Firebase
var firebaseConfig = {
  apiKey: "AIzaSyB_RnDi3T82fgnVkgqv4SPP6qJOAeyspUU",
  authDomain: "story-hub-af8f8.firebaseapp.com",
  databaseURL: "https://story-hub-af8f8-default-rtdb.firebaseio.com",
  projectId: "story-hub-af8f8",
  storageBucket: "story-hub-af8f8.appspot.com",
  messagingSenderId: "137279378595",
  appId: "1:137279378595:web:212d55c5bb13533fdedb16"
  };


// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default  firebase.firestore()
