import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import {Typography, Stack} from '@mui/material';


export default function TopBanner() {
  return (
    <Box sx={{ flexGrow: 1 }}>
        <div className='univ'>
            <img alt="Sust logo" style={{width: '35px'}} src='/static/sust.png'></img>
            <span className='univ-name'>Shahjalal University of Science and Technology</span>
        </div>
    </Box>
  );
}

