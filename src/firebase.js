
import { initializeApp } from "firebase/app";
import {
     createUserWithEmailAndPassword,
     getAuth, 
     signInWithEmailAndPassword, 
     signOut} from "firebase/auth";
import { 
    addDoc, 
    collection, 
    getFirestore } from "firebase/firestore";
import { toast } from "react-toastify";

const firebaseConfig = {
  apiKey: "AIzaSyAh8sCL9CutRFMaNmIk5romQ_416i2vE0I",
  authDomain: "netflix-clone-3d704.firebaseapp.com",
  projectId: "netflix-clone-3d704",
  storageBucket: "netflix-clone-3d704.firebasestorage.app",
  messagingSenderId: "766027523735",
  appId: "1:766027523735:web:6ffcf7c722708d4fe2abd2"
};


const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name, email, password) => {
    try{
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection (db, "users"), {
        uid: user.uid,
        name: name,
        authProvider: "local",
        email: email,
    })
    } catch (error) {
       console.log(error);
       toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const login = async (email, password) => {
    try {
  await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
        console.log(error);
         toast.error(error.code.split('/')[1].split('-').join(" "));
    }
}
const logout = () => {
    signOut(auth);
}
export { auth, db, signup, login, logout };