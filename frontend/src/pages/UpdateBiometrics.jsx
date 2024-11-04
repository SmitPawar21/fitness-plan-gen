import React, { useState, useEffect } from 'react';
import background_2 from "../images/background_2.jpg";
import {useAuth} from "../components/AuthContext"

export const UpdateBiometrics = () => {

  const {userId} = useAuth();

  const [formData, setFormData] = useState({
    height: '',
    weight: '',
    age: '',
    gender: '',
    bloodPressure: '',
    stepsCount: '',
    heartRate: '',
    bodyFat: '',
    bmi: '',
    medicalCondition: '1',
    healthRestrictions: '',
    chest: '',
    waist: '',
    hips: ''
  });

  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updateStatus, setUpdateStatus] = useState(''); // For showing update success/failure messages

  // Fetch user data when component mounts
  useEffect(() => {
    const fetchUserBiometrics = async () => {
      try {
        setIsLoading(true);
        // Replace with your API endpoint
        const response = await fetch('http://localhost:5000/biometrics',{
          method: 'GET',
          headers:{
            'content-type': 'application/json'
          },
          body: JSON.stringify({
            user_id: userId
          })
        });

        if (!response.ok) {
          throw new Error('Failed to fetch user data');
        }

        const data = await response.json();
        console.log("database se aaya hua biometrics data: ", data);

        setFormData({
          height: data.height || '',
          weight: data.weight || '',
          age: data.age || '',
          gender: data.gender || '',
          bloodPressure: data.bloodPressure || '',
          stepsCount: data.stepsCount || '',
          heartRate: data.heartRate || '',
          bodyFat: data.bodyFat || '',
          bmi: data.bmi || '',
          medicalCondition: data.medicalCondition || '1',
          healthRestrictions: data.healthRestrictions || '',
          chest: data.chest || '',
          waist: data.waist || '',
          hips: data.hips || ''
        });
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    };

    fetchUserBiometrics();
  }, []);

  // Handle input changes (just update local state)
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Handle form submission
  const handleSubmit = async () => {
    try {
      setUpdateStatus('Updating...');
      const response = await fetch('http://localhost:5000/biometrics', {
        method: 'PATCH',
        headers: {
          'Content-Type': 'application/json',
          'authorization': `bearer ${userId}`
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        throw new Error('Failed to update data');
      }

      setUpdateStatus('Update successful!');
      // Clear success message after 3 seconds
      setTimeout(() => setUpdateStatus(''), 3000);
      
    } catch (err) {
      setError(err.message);
      setUpdateStatus('Update failed. Please try again.');
    }
  };

  if (isLoading) {
    return <div className="text-center p-4">Loading...</div>;
  }

  if (error) {
    return <div className="text-center text-red-500 p-4">Error: {error}</div>;
  }

  return (
    <div>
      <div className='back-signup'>
        <img src={background_2} alt="image hai" className='backgroundimg' />
      </div>

      <div className="filter-box"></div>

      <div className='user-details-form'>
        <h1 className='animated-text'> Update Your Biometrics </h1>

        {updateStatus && (
          <div className={`text-center p-2 ${updateStatus.includes('failed') ? 'text-red-500' : 'text-green-500'}`}>
            {updateStatus}
          </div>
        )}

        <div className='input-box'>
          <input 
            type='number' 
            name="height"
            value={formData.height}
            onChange={handleInputChange}
            placeholder='Height in cms' 
          />
          <input 
            type='number' 
            name="weight"
            value={formData.weight}
            onChange={handleInputChange}
            placeholder='Weight in cms' 
          />
        </div>

        <div className='input-box'>
          <input 
            type='number' 
            name="age"
            value={formData.age}
            onChange={handleInputChange}
            placeholder='Current Age' 
          />
          <input 
            type='text' 
            name="gender"
            value={formData.gender}
            onChange={handleInputChange}
            placeholder='Gender' 
          />
          <input 
            type='number' 
            name="bloodPressure"
            value={formData.bloodPressure}
            onChange={handleInputChange}
            placeholder='Blood Pressure' 
          />
        </div>

        <div className='input-box'>
          <input 
            type='number' 
            name="stepsCount"
            value={formData.stepsCount}
            onChange={handleInputChange}
            placeholder='Average Steps Count / day' 
          />
          <input 
            type='number' 
            name="heartRate"
            value={formData.heartRate}
            onChange={handleInputChange}
            placeholder='Resting heart rate' 
          />
        </div>
        <br />

        <h5>- - - - - Other Details - - - - -</h5>

        <div className='input-box'>
          <input 
            type='number' 
            name="bodyFat"
            value={formData.bodyFat}
            onChange={handleInputChange}
            placeholder='Body Fat' 
          />
          <input 
            type='number' 
            name="bmi"
            value={formData.bmi}
            onChange={handleInputChange}
            placeholder='Body Mass Index' 
          />
        </div>

        <div className='input-box'>
          <select 
            name="medicalCondition"
            value={formData.medicalCondition}
            onChange={handleInputChange}
          >
            <option value="1">Medical Condition:</option>
            <option value="2">Diabetes</option>
            <option value="3">Hypertension</option>
            <option value="4">Heart Disease</option>
            <option value="5">Asthama</option>
            <option value="6">Chronic Kidney Disease</option>
            <option value="7">Liver Disease</option>
            <option value="8">Respiratory Conditions</option>
          </select>

          <input 
            type='text' 
            name="healthRestrictions"
            value={formData.healthRestrictions}
            onChange={handleInputChange}
            placeholder='Other Health Restrictions' 
          />
        </div>
        <br />

        <h5>- - - - - Body Measurements - - - - -</h5>

        <div className='input-box'>
          <input 
            type='number' 
            name="chest"
            value={formData.chest}
            onChange={handleInputChange}
            placeholder='Chest in cms' 
          />
          <input 
            type='number' 
            name="waist"
            value={formData.waist}
            onChange={handleInputChange}
            placeholder='Waist in cms' 
          />
          <input 
            type='number' 
            name="hips"
            value={formData.hips}
            onChange={handleInputChange}
            placeholder='Hips in cms' 
          />
        </div>

        <button id="btn" onClick={handleSubmit}> Submit </button>
      </div>
    </div>
  );
};