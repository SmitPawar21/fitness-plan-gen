import React from 'react';
import { useState } from "react";
import background_2 from "../images/background_2.jpg";
import email from "../images/email.svg";
import pass from "../images/pass.svg";
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/AuthContext';

export const SigninPage = () => {
  const navigate = useNavigate();
  const { login } = useAuth();
  const { saveUserId } = useAuth();
  const { saveToken } = useAuth();
  const { token } = useAuth();
  const { dataEntry } = useAuth();
  const { isDataEntered } = useAuth();

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

  const checkData = async () => {

    // this will first check whether user exist. then will take id on the basis of email from database. and after taking id will create a token based on that id

    login(userData);
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
      .then((data) => {
        const token = data.token;
        const user_id = data.user_id;
        const value = data.userIdExists;

        dataEntry(value);

        console.log('login ke baad user id: ', user_id);

        saveToken(token);
        saveUserId(user_id);
      });

    await fetch('http://localhost:5000/protected', {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
        'authorization': `bearer ${token}`
      }
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.message === 'success') {
          alert('Logged in Successfully');

          if (isDataEntered === true) {
            navigate('/dashboard');
          }
          else {
            navigate('/userinfo');
          }
        }
        else {
          alert('You have no access sorry.')
        }
      })
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

          <h4 style={{color:'white', fontFamily:'Poppins', fontSize:'1vw', fontWeight:'300', marginTop:'3vh', textAlign:'left'}}> Don't have account? <a style={{color:'yellow', fontSize:'1vw', textDecoration:'none'}} href='/signup'> sign up </a>  |  Go back to <a style={{color:'yellow'}} href='/'> home </a> </h4>

          {/* <h4 style={{color:'white', fontFamily:'Poppins', fontSize:'1.3vw', fontWeight:'300', marginTop:'1vh', textAlign:'left'}}> Go back to <a style={{color:'yellow'}} href='/'> home </a> </h4> */}

        </form>
      </div>
    </div>
  )
};
