import React from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from 'firebase/auth'
import { getFirestore, collection, addDoc } from 'firebase/firestore'

const useInitialState = () => {
    const auth = getAuth();
    const firestore = getFirestore();

    const loginUser = (formData) => {
        signInWithEmailAndPassword(auth , formData.email, formData.password)
        .then((userCredential) => {
            console.log('Login Successfull')
            
        }).catch((error)=>{
            console.log(error.message)
        })
    }

    const signUpUser = (formData) => {
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
        .then( async (userCredential) => {
            await addDoc(collection(firestore, 'usuarios'), formData)
            console.log('register successfull')

        }).catch((error) =>{
            console.log(error.message)
        })
    }

    const logOutUser = () => {
        signOut(auth).then(() =>{
            console.log('signout successfull')
        }).catch((error) =>{
            console.log(error.message)
        })
    }

    return{
        loginUser,
        signUpUser,
        logOutUser,
    }
};

export default useInitialState;