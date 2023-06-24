import React, { useState, useContext } from "react";
import userApis from "../Apis/userApis";
import authContext from "../context/authContext";
import { useNavigate } from "react-router-dom";



const Login = (props) => {



    let [logged, setLogged] = useState({
        username: "",
        password: ""
    })
    let [error, setError] = useState("")

    let { userData, setUserData } = useContext(authContext);

    const navigate = useNavigate();

    function handleLogin(event) {
        event.preventDefault();

        if (!logged.username && !logged.password) {
            return setError("Please fill the all the mandetory ")
        }
        console.log(logged)
        userApis.post('/auth/login', logged)
            .then((res) => {
                console.log(res.data)
                setUserData(res.data)
                navigate("/Profile")
            })
            .catch((err) => console.log(err))

    }

    return (
        <div>
            <div className="form">
                
                <form className="data">
                    <label for="username">Username</label>
                    <input type="text" placeholder="username"
                        onChange={(e) => setLogged({ ...logged, username: e.target.value })}
                    />
                    <br /><br />

                    <label for="password">password</label>
                    <input type="password" placeholder="Password"
                        onChange={(e) => setLogged({ ...logged, password: e.target.value })}
                    />
                    <br /><br />
                    <button type="submit" onClick={handleLogin}>Login</button>

                </form>
                {props.children}
            </div>


        </div>
    )
}

export default Login;