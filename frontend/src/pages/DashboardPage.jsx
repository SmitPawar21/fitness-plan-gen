import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Clock } from '../components/Clock';
import { Navigate, useNavigate } from "react-router-dom";
import { useAuth } from '../components/AuthContext';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: '46vh',
}));


export const DashboardPage = () => {

  const {user} = useAuth();

  const navigate = useNavigate();

  const handleGenPlanPage = ()=>{
    navigate('/generateplan');
  }

  const handleSubs = ()=>{
    navigate('/subscription');
  }

  const handleToDo = ()=>{
    navigate('/todolist');
  }

  const handlePlanDetails = ()=>{
    navigate('/planinfo');
  }

  const handleBiometrics = ()=>{
    navigate('/updatebiometrics');
  }

  const handleHome = ()=>{
    navigate('/');
  }

  const handleAbout = ()=>{
    navigate('/about');
  }

  const handleUsage = ()=>{
    navigate('/usage')
  }

  if(!user){
    return <Navigate to="/signup" />;
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item className='item item_1'>
            <div className="filter-box-item" onClick={handleSubs}>
              <h3> Subscription Plan </h3>
            </div>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item className='item item_2'>
            <div className="filter-box-item" onClick={handleToDo}>
              <h3> Your To-Do List </h3>
            </div>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item className='item item_3'>
            <div className="filter-box-item">
              <h3> Personalized Chatbot </h3>
            </div>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item className='item item_4'>
            <div className="filter-box-item">
              <h3> Analytics </h3>
            </div>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item className='item item_5'>
            <h1 style={{color: 'white'}}> DASHBOARD </h1>
            <Clock />
            <button id="btn" onClick={handleGenPlanPage}> Generate Your Fitness Plan </button>
            <button id="btn" onClick={handleBiometrics}> Update Your Biometrics </button>
            <ul style={{listStyle:'none', display:'flex', width:'100%', boxSizing:'border-box', padding:'3vh 2vw', justifyContent:'space-around'}}>
              <li onClick={handleHome} style={{textDecoration: 'underline', color:'white', cursor:'pointer'}}>Home</li>
              <li onClick={handleAbout} style={{textDecoration: 'underline', color:'white',cursor:'pointer'}}>About</li>
              <li onClick={handleUsage} style={{textDecoration: 'underline', color:'white',cursor:'pointer'}}>Usage</li>
            </ul>
          </Item>
        </Grid>

        <Grid size={4}>
          <Item className='item item_6'>
            <div className="filter-box-item" onClick={handlePlanDetails}>
              <h3> Fitness Plan Details </h3>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
