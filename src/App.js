import React ,{useContext,useEffect} from 'react';
import './App.css';
import './style.css';
import Login from "./Components/login"

import Profile from './Components/Profile';
import {Routes, Route} from "react-router-dom";
import authContext from "./context/authContext";
import { useNavigate } from 'react-router-dom';

const App = () => {

  let { userData, setUserData } = useContext(authContext);
  let navigate = useNavigate()
  useEffect(()=>{
    if(!Object.keys(userData).length){
      navigate("/")
      
      }else{
        console.log("else")
      }
      return ()=>{
        
      }
  },[])
  return (
  
    <div>
      <Routes>
          
            <Route path="/" element={<Login />} />
            <Route path="/Profile" element={<Profile />} />

        </Routes>

    </div>
  )
}

export default App;