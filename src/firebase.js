import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import toast from "react-hot-toast";
import { userHandle } from "utils";

const firebaseConfig = {
  apiKey: "AIzaSyAlCBpKllmpdDYTBfW77uE5RAqayfKD4es",
  authDomain: "instagram-clone-react-25f4b.firebaseapp.com",
  projectId: "instagram-clone-react-25f4b",
  storageBucket: "instagram-clone-react-25f4b.appspot.com",
  messagingSenderId: "879757438926",
  appId: "1:879757438926:web:d0efa67012a247ab5ac59f",
  measurementId: "G-5VVZMLN6V7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, user => {
      userHandle(user || false)
})

export const login = async (email, password) =>{
    try {
    
   const response = await signInWithEmailAndPassword(auth, email, password)
   
   } catch (err){
     toast.error(err.code)
   }
}

export const logout = async() => {
  try {
    await signOut(auth)
  } catch(err) {
    toast.error(err.code)
  }
}