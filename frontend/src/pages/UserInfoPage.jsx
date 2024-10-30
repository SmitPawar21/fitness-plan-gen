import React, { useState } from 'react';
import background_2 from "../images/background_2.jpg";
import { useNavigate } from 'react-router-dom';
import {useAuth} from "../components/AuthContext";

export const UserInfoPage = () => {
  const navigate = useNavigate();
  const {user} = useAuth();
  const {userId} = useAuth();

  const [userData, setUserData] = useState({
    height: 0,
    weight: 0,
    age: 0,
    gender: '',
    steps: 0,
    heartrate: 0,
    bp: 0,
    fat: 0,
    bmi: 0,
    chest: 0,
    waist: 0,
    hips: 0,
    cond: '',
    restrict: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const storeDataInBackend = () =>{
    fetch('http://localhost:5000/biometrics',{
      method: 'POST',
      headers:{
        'content-type': 'application/json',
        'authorization': `bearer ${userId}`
      },
      body: JSON.stringify({
        h: userData.height,
        w: userData.weight,
        age: userData.age,
        gender: userData.gender,
        bp: userData.bp,
        steps: userData.steps,
        heartrate: userData.heartrate,
        fat: userData.fat,
        bmi: userData.bmi,
        chest: userData.chest,
        waist: userData.waist,
        hips: userData.hips,
        cond: userData.cond,
        restrict: userData.restrict
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      navigate('/dashboard');
  });
  }

  if(!user){
    navigate('/signin');
  }

  return (
    <div>
      <div className='back-signup'>
        <img src={background_2} alt="image hai" className='backgroundimg' />
      </div>
      <div className="filter-box"></div>
      <div className='user-details-form'>
        <h1 className='animated-text'> Enter Your Biometrics </h1>
        <div className='input-box'>
          <input type='number' name="height" placeholder='Height in cms' onChange={handleInputChange} />
          <input type='number' name="weight" placeholder='Weight in kgs' onChange={handleInputChange} />
        </div>
        <div className='input-box'>
          <input type='number' name="age" placeholder='Current Age' onChange={handleInputChange} />
          <input type='text' name="gender" placeholder='Gender' onChange={handleInputChange} />
          <input type='number' name="bp" placeholder='Blood Pressure' onChange={handleInputChange} />
        </div>
        <div className='input-box'>
          <input type='number' name="steps" placeholder='Average Steps Count / day' onChange={handleInputChange} />
          <input type='number' name="heartrate" placeholder='Resting heart rate' onChange={handleInputChange} />
        </div>
        <br />
        <h5>- - - - - Other Details - - - - -</h5>
        <div className='input-box'>
          <input type='number' name="fat" placeholder='Body Fat' onChange={handleInputChange} />
          <input type='number' name="bmi" placeholder='Body Mass Index' onChange={handleInputChange} />
        </div>
        <div className='input-box'>
          <select name="cond" onChange={handleInputChange}>
            <option value="1">Medical Condition:</option>
            <option value="2">Diabetes</option>
            <option value="3">Hypertension</option>
            <option value="4">Heart Disease</option>
            <option value="5">Asthama</option>
            <option value="6">Chronic Kidney Disease</option>
            <option value="7">Liver Disease</option>
            <option value="8">Respiratory Conditions</option>
          </select>
          <input type='text' name="restrict" placeholder='Other Health Restrictions' onChange={handleInputChange} />
        </div>
        <br />
        <h5>- - - - - Body Measurements - - - - -</h5>
        <div className='input-box'>
          <input type='number' name="chest" placeholder='Chest in cms' onChange={handleInputChange} />
          <input type='number' name="waist" placeholder='Waist in cms' onChange={handleInputChange} />
          <input type='number' name="hips" placeholder='Hips in cms' onChange={handleInputChange} />
        </div>
        <button id="btn" onClick={storeDataInBackend}> Submit </button>
      </div>
    </div>
  );
};