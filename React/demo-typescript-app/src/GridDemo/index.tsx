import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Hyd from '../Images/Hyderabad.webp';
import Ban from '../Images/bangalore.jpg';
import Che from '../Images/Chennai.jpg';
import Del from '../Images/Delhi.webp';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

export default function GridDemo() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={8} lg={8}>
          <img className="img1" src={Hyd}/>
        </Grid>
        <Grid className="img1" item xs={4} lg={4}>
          <img src={Ban}/>
        </Grid>
        <Grid className="img1" item xs={8} lg={4}>
          <img src={Che}/>
        </Grid>
        <Grid className="img1" item xs={4} lg={8}>
          <img src={Del}/>
        </Grid>
      </Grid>
    </Box>
  );
}

