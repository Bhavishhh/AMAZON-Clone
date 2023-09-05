// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import {initializeApp} from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";



const firebaseConfig = {
  apiKey: "AIzaSyDZ1WwZwOXMLwk8b1j0w5IGIAbqbs-vgHk",
  authDomain: "clone-21842.firebaseapp.com",
  projectId: "clone-21842",
  storageBucket: "clone-21842.appspot.com",
  messagingSenderId: "882213844926",
  appId: "1:882213844926:web:15a28c66243f0765b06bef",
  measurementId: "G-V2HDHN71M7"
};

const firebaseApp=initializeApp(firebaseConfig);

const db=getDatabase(firebaseApp);
const auth=getAuth(firebaseApp);

export {auth,db};