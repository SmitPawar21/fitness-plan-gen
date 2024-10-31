import React from 'react';
import { useState } from 'react';
import { useAuth } from '../components/AuthContext';

export const GenPlanPage = () => {

  const [message, setMessage] = useState('');

  const {userId} = useAuth();
  const {savedPlan} = useAuth();

  const generatePrompt = async () => {

    await fetch('http://localhost:5000/generateplan',{
      method: 'POST',
      headers:{
        'content-type': 'application/json'
      },
      body: JSON.stringify({
        user_id: userId
      })
    })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
      setMessage(data.plan);
    });

    console.log(message);
  }

  const savePlan = ()=>{
    savedPlan(message);
    alert('Saved Your Plan successfully. View it in `Plan details` sections');
  };

  return (
    <div>
      <div class="container-genplan">
        <div class="prompt-display" id="promptDisplay">
          <h2 style={{ fontFamily: 'Poppins', fontWeight: '400', fontSize: '1.5vw' }}>
            <b>Generate Your New Fitness Plan</b> <br /><br />
            {message}
          </h2>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '1vw' }}>

          <button class="generate-button" style={{ display: message === '' ? 'none' : 'block' }}>Copy This Plan</button>
          <button class="generate-button" onClick={generatePrompt}>Generate New Plan</button>
          <button class="generate-button" onClick={savePlan} style={{ display: message === '' ? 'none' : 'block' }}>Save This Plan</button>

        </div>
      </div>
    </div>
  )
};
