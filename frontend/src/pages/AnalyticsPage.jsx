import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import { LineGraph } from "../components/LineGraph";
import { PieGraph } from '../components/PieGraph';
import { RadarGraph } from '../components/RadarGraph';
import { Navigate, useNavigate } from "react-router-dom";

const Item = styled(Paper)(({ theme }) => ({
  ...theme.typography.body2,
  color: theme.palette.text.secondary,
  ...theme.applyStyles('dark', {
    backgroundColor: '#1A2027',
  }),
  height: '46vh',
  boxSizing: 'border-box',
  padding: '0vh 1vw',
}));

export const AnalyticsPage = () => {

  const navigate = useNavigate();

  const handleHome = ()=>{
    navigate('/');
  }

  const handleAbout = ()=>{
    navigate('/about');
  }

  const handleUsage = ()=>{
    navigate('/usage')
  }

  const handleDash = ()=>{
    navigate('/dashboard')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid size={8}>
          <Item style={{backgroundColor: '#dfcdc3'}}>
            {/* line chart */}
            <h2 style={{textAlign:'right', fontSize:'1.2vw'}}> targetted weight: 65 kgs </h2>
            <LineGraph />
            <h1 style={{textAlign:'center', fontSize:'1.2vw'}}> WEIGHT GAIN/LOSS PROGRESS LINE GRAPH </h1>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item style={{backgroundColor:'#719192', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
            {/* pie chart */}
            <PieGraph />
            <h1 style={{textAlign:'center', fontSize:'1.3vw', color:'#dadada'}}> What to focus on? Cardio, Strength, Diet </h1>
          </Item>
        </Grid>
        <Grid size={4}>
          <Item style={{backgroundColor:'#bcdbdf'}}>
            {/* radar chart */}
            <RadarGraph />
          </Item>
        </Grid>
        <Grid size={8}>
          <Item style={{backgroundColor: '#dfcdc3'}}>
            <h1> ANALYTICS </h1>

            <p style={{color:'#1A2027', fontSize:'1.2vw'}}>Get detailed insights into your data with interactive charts and visualizations. Analyze trends, track key metrics, and monitor performance with easy-to-read graphs and customizable axes. The analytics page helps you make informed decisions based on real-time data. Explore various chart types, including line, bar, and pie charts, to visualize your data in the most effective way.</p>

            <ul style={{width:'100%', display:'flex',justifyContent:'space-around', alignItems:'center', listStyle:'none', marginTop:'2vh'}}>
              <li style={{border:'1px solid gray', padding:'7px 13px', cursor:'pointer'}}>Update Radar Chart data</li>

              <li style={{border:'1px solid gray', padding:'7px 13px', cursor:'pointer'}}>Update Pie Chart data</li>

              <li style={{border:'1px solid gray', padding:'7px 13px', cursor:'pointer'}}>Update Line Chart data</li>
            </ul>



            <button id='btn' style={{marginLeft:'2vw'}} onClick={handleDash}> Go To Dashboard </button>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
