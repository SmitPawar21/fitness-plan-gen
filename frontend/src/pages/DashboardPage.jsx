import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { Clock } from '../components/Clock';

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  textAlign: 'center',
  height: '46vh',
}));

export const DashboardPage = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={4}>
          <Item className='item item_1'>
            <div className="filter-box-item">
              <h3> Subscription Plan </h3>
            </div>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item className='item item_2'>
            <div className="filter-box-item">
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
            <button id="btn"> Generate Your Fitness Plan </button>
            <button id="btn"> Update Your Biometrics </button>
          </Item>
        </Grid>

        <Grid size={4}>
          <Item className='item item_6'>
            <div className="filter-box-item">
              <h3> Fitness Plan Details </h3>
            </div>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
