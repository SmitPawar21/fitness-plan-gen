import React from 'react';
import { Navbar } from '../components/Navbar';
import { Button } from '@mui/material';

export const LandingPage = () => {
  return (
    <div className='landing-page'>
      <Navbar />

      <div className="blob-container">
        <div className="blob blob1"></div>
        <div className="blob blob2"></div>
        <div className="blob blob3"></div>
      </div>

      <div className='heading'>
        <h1> FitGenius </h1>
        <p> Your Personalized Path to Peak Performance! </p>
        <Button variant="contained" className='button'> Go To Dashboard </Button>
      </div>

    </div>
  )
};
