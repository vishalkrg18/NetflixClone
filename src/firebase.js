import firebase from 'node_modules\firebase';
//authentication
import "firebase/auth";
//realtime database
import "firebase/database";
//storage
import "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyCxNHCtAm8r84xQd7D4eMwt8mGiX6SiDZI",
  authDomain: "netflix-clone-fbdbf.firebaseapp.com",
  projectId: "netflix-clone-fbdbf",
  storageBucket: "netflix-clone-fbdbf.appspot.com",
  messagingSenderId: "132918665474",
  appId: "1:132918665474:web:22d7fb858b2972a206621b"
};

firebase.initializeApp(firebaseConfig);
export default firebase;