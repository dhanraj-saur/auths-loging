import React, { useState } from "react";
import authContext from "./authContext";


const AuthProvider = (props) => {
    let [userData, setUserData] = useState("");


    return (

        <authContext.Provider value={{ userData, setUserData }}>

            {props.children}

        </authContext.Provider>
    )

}

export default AuthProvider;