import React from 'react';
import logo from './logo.svg';
import './App.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';
import Comp from './Comp';
import GroupAvatars from './GroupAvatars';
import LinearColor from './LinearColor';
import { Routes, Route, Outlet, Link } from "react-router-dom";
import Home from './Home';
import Layout from './Layout';
import About from './About';
import Dashboard from './Dashboard';
import NoMatch from './NoMatch';
import GridDemo from './GridDemo';

function App() {
  return (
    <div className="App">
      
       <Stack spacing={2} direction="row">
       <Button variant="text">Text</Button>
      <Button variant="contained">Contained</Button>
      <Button variant="outlined">Outlined</Button>
     </Stack>

     <Box sx={{ width: 300 }}>
     
      <Slider
        aria-label="Small steps"
        defaultValue={0.00000005}
         step={0.00000001}
        marks
         min={-0.00000005}
        max={0.0000001}
        valueLabelDisplay="auto"
      />
     </Box>
     <Comp/>
     <GroupAvatars/>
     <LinearColor/> 
     <GridDemo/>
    
    <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="dashboard" element={<Dashboard />} />

          {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
          <Route path="*" element={<NoMatch />} />
        </Route>
      </Routes>
     
    </div>
  );
}

export default App;
