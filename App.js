import React from "react";
import firebase from "./app/configuracion/firebase";
import Navigation from "./app/Navigations/Navigation";
import "firebase/auth";

export default function App  (){

        firebase.auth().onAuthStateChanged(user =>{
            console.log(user);
        })
    return(
        <Navigation/>
        // geras puto .l.
    );
}
