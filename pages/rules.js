import React from 'react';
import { Accordion, AccordionSummary, AccordionDetails, Typography,Grid, Stack } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import image from '@/assets/pic2.png'
import Image from 'next/image';

const rulesData = [
  {
    title: 'Discord Rules',
    content: `Nudity or explicit content of any kind is not allowed. 

    Offensive language or content that can offend someone else is not allowed.
    
     Spam in general is not allowed. 
    
    Complaints must be posted on the forums with the correct form, not on discord.
    
    Cyber threats, or threats in general will be taken very seriously. 
    
    Harassment, excessively targeting a player or staff member or excessively messaging a player or staff member will not be tolerated. 
    
    Server advertisement of any sort is not allowed. 
    
    Admins have the final say in what is allowed. They have the right to remove posts as they see fit. You do not have permission to send messages in this channel.`,
  },
  {
    title: 'Illegal Rules',
    content: (<ol >
    <li> Max members per gang are 15 males and 3 females </li>
    <li> wearing another gang's clothing style is bannable, a gang's mask is the most importang thing</li>
    <li>stealing the gang's stash if you someday decide to leave is bannable </li>
    <li>when you're the boss and you use players to farm for you and then you kick them out of the gang for no reason you get banned (rp isn't about farming)</li>
    <li>when you kill/rob a player that went near your hood because of his job you'll get banned</li>
    <li>provoking another gang in a poor rp quality and for no reason is bannable </li>
    <li>No alliance between factions at any cost MORT RP := WIPE, New Character (that has no relation with the old character), New Life, New Story, New Objectifs 1</li>
    <li>you can start a MORT RP if you have a strong reason and you need to open a ticket about it</li>
    <li>you don't have the right to leave your ownings to anyone else if you get a MORT RP</li>
    <li>if you get a MORT RP your new character is independant from the old one </li>
    </ol>)},
  {
    title: 'Discord Rules',
    content: `Nudity or explicit content of any kind is not allowed. 

    Offensive language or content that can offend someone else is not allowed.
    
     Spam in general is not allowed. 
    
    Complaints must be posted on the forums with the correct form, not on discord.
    
    Cyber threats, or threats in general will be taken very seriously. 
    
    Harassment, excessively targeting a player or staff member or excessively messaging a player or staff member will not be tolerated. 
    
    Server advertisement of any sort is not allowed. 
    
    Admins have the final say in what is allowed. They have the right to remove posts as they see fit. You do not have permission to send messages in this channel.`,
  },
];

const RulesPage = () => {
  return (
    <div>
       <Typography variant="h1" component="h1" gutterBottom textAlign={'center'} fontFamily={'fantasy'} >
        Rules
      </Typography>
<Stack style={{justifyContent:'space-around',float:'none'}} direction={'row'}>  
<div style={{width:'60%'}}>
      {rulesData.map((rule, index) => (
        <Accordion key={index} sx={{backgroundColor:'rgb(28,31,42,0.3)',color:'white'}}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls={`panel${index}-content`} id={`panel${index}-header`}>
            <Typography variant="h6">{rule.title}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>{rule.content}</Typography>
          </AccordionDetails>
        </Accordion>
      ))}
</div>
      <div><Image src={image} alt='' width={400}/></div>
     </Stack>
    </div>
  );
};

export default RulesPage;
