import React, { useEffect, useState, useContext } from 'react';
import userApis from '../Apis/userApis';
import authContext from "../context/authContext";
import { useNavigate } from 'react-router-dom';

const Profile = () => {

    let [profile, setProfile] = useState("")

    let { userData, setUserData } = useContext(authContext)

    let navigate = useNavigate()


    useEffect(() => {
        console.log(userData);
        userApis.get(`/users/${userData.id}`)
            .then(response => setProfile(response.data))
            .catch(err => console.log(err))
    }, [])


    function handleLogout() {
          setUserData("")
          setProfile("")
          navigate("/")

        // userApis.delete("/auth/logout", {
        //     headers: {
        //         authorization: `Bearer ${token}`
        //     }
        // })
        //     .then(response => {
        //        // setToken("")
        //         //setProfile("")
        //         alert("Logged out successfully")
        //         navigate("/Login")
        //     })
        //     .catch(err => console.log(err))
    }

    return (

        <div>
            <h1 className='heads'>Profile Page</h1>


            {
                Object.keys(profile).length > 0 ? (
                    <div>
                        <div className='users'>
                           <p> UserEmail:-{profile.email}</p>
                           <p> UserName:-{profile.username}</p>
                        </div>
                        <button  id="btn" onClick={handleLogout}> Logout </button>
                    </div>

                ):<h1>{}</h1>
            }

        </div>

    )
}

export default Profile;