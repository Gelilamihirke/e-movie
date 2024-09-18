// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { createUserWithEmailAndPassword, getAuth, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { addDoc, collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB6lbkYBz3N7NhOUUTWIY2ZfzuCEnIvSx8",
  authDomain: "e-movie-8460f.firebaseapp.com",
  projectId: "e-movie-8460f",
  storageBucket: "e-movie-8460f.appspot.com",
  messagingSenderId: "640142310404",
  appId: "1:640142310404:web:422b05af39ee1ab6430951"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);


const signup = async (name,email,password)=>{
    try {
        const res = await createUserWithEmailAndPassword(auth,email,password)
const user = res.user;
await addDoc(collection(db, "user"),{
    vid: user.uid,
    name,
    authProvider: "local",
    email,

});
    } catch(error){

        console.log(error);
        alert(error);
    }
}

const login = async(email,password)=>{
    try{
        signInWithEmailAndPassword(auth, email, password);

    } catch (error){
        console.log(error);
        alert(error);

    }

}

const logout = ()=>{
    signOut(auth);
}

export {auth, db, login, signup, logout};