import firebase from "firebase";
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAHNmeGh-QUPb9bviHc9f7--v_GeI0mx00",
  authDomain: "dktmusic-afef7.firebaseapp.com",
  databaseURL: "https://dktmusic-afef7.firebaseio.com",
  projectId: "dktmusic-afef7",
  storageBucket: "dktmusic-afef7.appspot.com",
  messagingSenderId: "280109091608",
  appId: "1:280109091608:web:46a17b863ddd18712dac6d",
  measurementId: "G-C17X1Z2PQY",
};

firebase.initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

const storage = firebase.storage();

export { storage, firebase as default };
