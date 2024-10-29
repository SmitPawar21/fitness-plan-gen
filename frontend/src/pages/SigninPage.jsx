import React from 'react';
import { useState } from "react";
import background_2 from "../images/background_2.jpg";
import email from "../images/email.svg";
import pass from "../images/pass.svg";
import { useNavigate } from 'react-router-dom';

export const SigninPage = () => {
  const navigate = useNavigate();

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

  const checkData = async ()=>{

    // this will first check whether user exist. then will take id on the basis of email from database. and after taking id will create a token based on that id

    await fetch('http://localhost:5000/login', {
      method: 'POST',
      headers: {
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        email: userData.email,
        password: userData.password
      })
    })
    .then((res) => res.json())
    .then((data) =>{
      const token = data.token;
      // now set this token to cookies
      
      alert('You are successfully logged in');
      navigate('/userinfo');
    });

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
