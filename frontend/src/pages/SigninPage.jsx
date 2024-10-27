import React from 'react';
import { useState } from "react";
import background_2 from "../images/background_2.jpg";
import email from "../images/email.svg";
import pass from "../images/pass.svg";

export const SigninPage = () => {

  const [userData, setUserData] = useState({
    email: '',
    password: ''
  })

  const updateEmail = (e) => {
    let value = e.target.value;
    console.log(value);
    setUserData({
      ...userData,
      email: value
    })
  }
  const updatePass = (e) => {
    let value = e.target.value;
    console.log(value);
    setUserData({
      ...userData,
      password: value
    })
  }

  const checkData = ()=>{

    console.log("Data will be send to backend. User will be created using AuthContext. Token will be created. And then User will get navigate to userinfo page")

  }

  return (
    <div>
      
      <div className='back-signup'>
                <img src={background_2} alt="image hai" className='backgroundimg' />
            </div>
      
      <div className="filter-box"></div>

      <div className="signup-container">
        <form action="#">
          <h1 className='animated-text'>Log In</h1>

          <div className="input-box">
            <img src={email} alt="image hai" />
            <input type="email" placeholder="Enter Your Email" onChange={updateEmail} />
          </div>

          <div className="input-box">
            <img src={pass} alt="image hai" />
            <input type="password" placeholder="Password" className='password' onChange={updatePass} />
          </div>

          <button className="login" onClick={checkData} >Login</button>

        </form>
      </div>
    </div>
  )
};
