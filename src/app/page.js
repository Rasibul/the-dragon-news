import { Grid } from '@mui/material';
import React from 'react';
import LatestNews from './components/ui/LatestNews/LatestNews';
import SideBar from './components/ui/LatestNews/SideBar/SideBar';

const HomePage = () => {
  return (
    <>
      <Grid container spacing={2}>
        <Grid item xs={8}>
          <LatestNews></LatestNews>
        </Grid>
        <Grid item xs={4}>
          <SideBar></SideBar>
        </Grid>
      </Grid>
    </>
  );
};

export default HomePage;