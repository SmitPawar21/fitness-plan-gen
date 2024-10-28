import React from 'react';
import { useState } from 'react';

export const GenPlanPage = () => {

  const [message, setMessage] = useState('');

  const generatePrompt = () => {

    setMessage("Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio odit eveniet reprehenderit facere, totam ipsa architecto iure, fugiat aliquid perferendis ducimus iste natus a tenetur eum optio repudiandae voluptatum quia ad animi tempora amet deserunt? Sint recusandae culpa sit voluptates illo numquam explicabo ratione voluptatibus dicta minima quam delectus magni saepe et, necessitatibus beatae cupiditate esse corporis eligendi. Ut, est.");

    console.log(message);
  }

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
          <button class="generate-button" style={{ display: message === '' ? 'none' : 'block' }}>Save This Plan</button>

        </div>
      </div>
    </div>
  )
};
