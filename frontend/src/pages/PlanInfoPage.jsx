import React from 'react';
import { useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

export const PlanInfoPage = () => {

  const navigate = useNavigate();
  const {plan} = useAuth();

  const handleDash = ()=>{
    navigate('/dashboard');
  }

  return (
    <div>
      <h1 className="animated-text" style={{ fontFamily: 'Poppins', fontSize: '2.5vw', marginLeft: '10%', marginTop:'1vh'}}> PLAN DETAILS </h1>
      <button className='plan-info-button' onClick={handleDash} > Go To Dashboard </button>
      <div className='container-planinfo' >
        {plan}
      </div>
    </div>
  )
};
