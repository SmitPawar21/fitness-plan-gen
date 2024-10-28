import React from 'react';
import background_2 from "../images/background_2.jpg";

export const UpdateBiometrics = () => {
  return (
    <div>
      <div className='back-signup'>
        <img src={background_2} alt="image hai" className='backgroundimg' />
      </div>

      <div className="filter-box"></div>

      <div className='user-details-form'>
        <h1 className='animated-text'> Update Your Biometrics </h1>

        <div className='input-box' >
          <input type='number' placeholder='Height in cms' />
          <input type='number' placeholder='Weight in cms' />
        </div>

        <div className='input-box' >
          <input type='number' placeholder='Current Age' />
          <input type='text' placeholder='Gender' />
          <input type='number' placeholder='Blood Pressure' />
        </div>

        <div className='input-box' >
          <input type='number' placeholder='Average Steps Count / day' />
          <input type='number' placeholder='Resting heart rate' />
        </div>
        <br />

        <h5>- - - - - Other Details - - - - -</h5>

        <div className='input-box' >
          <input type='number' placeholder='Body Fat' />
          <input type='number' placeholder='Body Mass Index' />
        </div>

        <div className='input-box' >
          <select>
            <option value="1">Medical Condition:</option>
            <option value="2">Diabetes</option>
            <option value="3">Hypertension</option>
            <option value="4">Heart Disease</option>
            <option value="5">Asthama</option>
            <option value="6">Chronic Kidney Disease</option>
            <option value="7">Liver Disease</option>
            <option value="8">Respiratory Conditions</option>
          </select>

          <input type='text' placeholder='Other Health Restrictions' />
        </div>
        <br />

        <h5>- - - - - Body Measurements - - - - -</h5>

        <div className='input-box' >
          <input type='number' placeholder='Chest in cms' />
          <input type='number' placeholder='Waist in cms' />
          <input type='number' placeholder='Hips in cms' />
        </div>

        <button id="btn"> Submit </button>

      </div>
    </div>
  )
};
