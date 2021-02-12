import firebase from "firebase";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB4y4bkqabAfHZaLMHe59ew65EnvArEd4Q",
  authDomain: "netflix-clone-ef59c.firebaseapp.com",
  projectId: "netflix-clone-ef59c",
  storageBucket: "netflix-clone-ef59c.appspot.com",
  messagingSenderId: "957823805161",
  appId: "1:957823805161:web:8d48f013f44e61d4313278",
  measurementId: "G-D6DSWBH514",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth };
export default db;
