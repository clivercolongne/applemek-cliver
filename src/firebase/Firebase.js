import firebase from 'firebase';
import 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyBJzozwAYkhG3NBx3E__cvppDORvMfVL60",
  authDomain: "apple-mek.firebaseapp.com",
  projectId: "apple-mek",
  storageBucket: "apple-mek.appspot.com",
  messagingSenderId: "711000631799",
  appId: "1:711000631799:web:aa9a33084e1af0272966f2",
  measurementId: "G-D76STJL7Q4"
};


const app = firebase.initializeApp(firebaseConfig)


export function getFirestore() {
  return firebase.firestore(app)
};
