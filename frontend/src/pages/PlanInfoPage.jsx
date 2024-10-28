import React from 'react';
import { useNavigate } from "react-router-dom";

export const PlanInfoPage = () => {

  const navigate = useNavigate();

  const plan = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit maiores alias nobis, quaerat vitae magnam dolorum aperiam tenetur amet commodi eum accusantium atque illo unde doloremque natus et hic! Adipisci, minima quam cupiditate, nesciunt tempore a amet, odit impedit soluta dolor incidunt rerum at laboriosam inventore enim dicta vel? Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit maiores alias nobis, quaerat vitae magnam dolorum aperiam tenetur amet commodi eum accusantium atque illo unde doloremque natus et hic! Adipisci, minima quam cupiditate, nesciunt tempore a amet, odit impedit soluta dolor incidunt rerum at laboriosam inventore enim dicta vel?Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis suscipit maiores alias nobis, quaerat vitae magnam dolorum aperiam tenetur amet commodi eum accusantium atque illo unde doloremque natus et hic! Adipisci, minima quam cupiditate, nesciunt tempore a amet, odit impedit soluta dolor incidunt rerum at laboriosam inventore enim dicta vel?";

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
