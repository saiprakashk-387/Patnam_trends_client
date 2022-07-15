import * as React from 'react';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';

export default function Footer() {
    const drawerWidth = 200;

  return (
    <Box sx={{ flexGrow: 1  ,backgroundColor:"burlywood" ,width: { sm: `calc(100% - ${drawerWidth}px)` },
    ml: { sm: `${drawerWidth}px` },position: "fixed  ",
    left: 0,
    bottom: 0
  }}>     
        <Toolbar>         
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            News
          </Typography>          
        </Toolbar>
     
    </Box>
  );
}
