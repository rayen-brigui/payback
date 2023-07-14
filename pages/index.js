import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

import { FormControl,InputLabel,Select ,MenuItem,TextField,Button, Box,Typography,Grid} from "@mui/material";
import pic1 from '@/assets/pic1.png'
import { useEffect, useState } from 'react';
export default function Home() {
  const [currentTime, setCurrentTime] = useState(new Date());
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
   
    <Box sx={{ width: '100%' }}>
      <Grid  container spacing={10} justifyContent={'space-around'} margin={'0px'} >
        <Grid item> 
        <Typography variant="h1"fontFamily={'fantasy'}>
    GTA 5 
      </Typography>
    <Typography variant="h1" component="h2" fontFamily={'fantasy'} color={'#EF3C42'}>
    ROLEPLAY 
</Typography>
<Typography variant="h5" component="h2" >
Step into the ultimate immersive reality <br/>
And rewrite the history of GTA 5 Roleplay like never before! 
</Typography>
</Grid> 
      
<Grid item >
<Image src={pic1} alt='' />

</Grid>
</Grid>
<Grid container sx={{backgroundColor:'rgba(16, 19, 27, 0.4)',zIndex:'2'}} minHeight={'280px'} height={'fit-content'} marginTop={'-70px'}  justifyContent={'space-evenly'} >
<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'}>
<Typography variant="h3" component="h2" fontFamily={'fantasy'} color={'#EF3C42'}>
{currentTime.toLocaleTimeString()} 
</Typography>
<Typography variant="h5" component="h2" >
Server Overview
</Typography>
</Grid>
<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'}>
  
</Grid>
<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'}>
  
</Grid>
<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'}>

</Grid>
</Grid>
</Box>

  )
}
