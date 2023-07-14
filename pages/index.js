import Image from 'next/image'

import { FormControl,InputLabel,Select ,MenuItem,TextField,Button, Box,Typography,Grid,Chip,LinearProgress} from "@mui/material";
import pic1 from '@/assets/pic1.png'
import { useEffect, useState } from 'react';
import { Card, Text, Metric, Flex, ProgressBar } from "@tremor/react";


const chartdata = [
  {
    date: "Jan 22",
    SemiAnalysis: 2890,
    "The Pragmatic Engineer": 2338,
  },
  {
    date: "Feb 22",
    SemiAnalysis: 2756,
    "The Pragmatic Engineer": 2103,
  },
  {
    date: "Mar 22",
    SemiAnalysis: 3322,
    "The Pragmatic Engineer": 2194,
  },
  {
    date: "Apr 22",
    SemiAnalysis: 3470,
    "The Pragmatic Engineer": 2108,
  },
  {
    date: "May 22",
    SemiAnalysis: 3475,
    "The Pragmatic Engineer": 1812,
  },
  {
    date: "Jun 22",
    SemiAnalysis: 3129,
    "The Pragmatic Engineer": 1726,
  },
];



export default function Home() {
  const [currentTime, setCurrentTime] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  useEffect(() => {
    if (isMounted) {
      const interval = setInterval(() => {
        setCurrentTime(new Date().toLocaleTimeString());
      }, 1000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [isMounted]);

  
const dataFormatter = (number) => {
  return "$ " + Intl.NumberFormat("us").format(number).toString();
};
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
<Grid container width={'380px'} height={'200px'}  margin={1} bgcolor={'rgb(33,37,50,0.3)'} borderTop={'1px solid red'}>
<Typography variant="h3" component="h2" fontFamily={'fantasy'} color={'#EF3C42'}>
{currentTime}</Typography>
<Typography variant="h5" component="h2" >
Server Overview <br/>
status: <Chip label="Online" color="success" />
</Typography>

</Grid>

<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'} borderTop={'1px solid cyan'}>

<LinearProgress />
</Grid>
<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'} borderTop={'1px solid orange'}>

<LinearProgress />
</Grid>
<Grid item width={'380px'} height={'100%'} margin={1} bgcolor={'rgb(33,37,50,0.3)'} borderTop={'1px solid Green'}>
<LinearProgress color={'warning'}/>
</Grid>
</Grid>
</Box>

  )
}
