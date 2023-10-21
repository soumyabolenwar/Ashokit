import React from 'react';
import logo from './logo.svg';
import './index.scss';
import { Link, Outlet } from 'react-router-dom';
import Grid from '@mui/material/Grid';

function Services() {
  return (
    <div className="Services">
      <Grid container spacing={2}>
        <Grid item xs={2}>
        <ul className='menu'>
          <li><Link to=".">Development Services</Link></li>
          <li><Link to="consulting">Consulting Services</Link></li>
          <li><Link to="training">Training Services</Link></li>
        </ul>
        </Grid>
        <Grid item xs={10}>
        <Outlet/>
        </Grid>
        </Grid>
    </div>
  );
}

export default Services;
