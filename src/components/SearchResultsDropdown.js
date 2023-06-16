import React from 'react'
import Grow from '@mui/material/Grow';
import Paper from '@mui/material/Paper';

import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Stack from '@mui/material/Stack';
import Avatar from '@mui/material/Avatar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import BottomPlayer from './BottomPlayer';


import './SearchResDropDown.css'
import { ThemeProvider, createTheme } from '@mui/material/styles';
const darkTheme = createTheme({
    palette: {
      mode: 'dark',
     
      

    },
    // TODO: change search res to custom color
    custom:{
        dark:  '#040404',
    }

  });


export default function SearchResultsDropdown({track, chooseTrack}) {
    if(track){
        console.log("track is not umdefined", track)
    }
    function handlePlay(){
        chooseTrack(track);
       
    };
  return (
    
    // <Stack direction="row" spacing={2}>
    <ThemeProvider theme={darkTheme}>
        <List dense sx={{ width: '100%', maxWidth: '100%', bgcolor: 'background.paper',display: 'flex' }} >
        <ListItem clasName = 'search-result-item' sx={{maxHeight: '70px', height: '60px', '&:hover': {backgroundColor: 'rgba(0, 0, 0, 0.7)',opacity: 0.7,},}}  onClick={handlePlay}>



        <ListItemAvatar>

            <Avatar variant="square"
                        
                  
                    src ={track.albumUrl} style={{height: '40px', width: '40px' }}
                />
        </ListItemAvatar>
        {/* <ListItemText  primary={`${track.title}`} sx={{
                    fontSize: '8px',
                    color: 'green',
                    padding: '2px',
                    flexDirection: 'column',
                    }}/> */}
                 <Typography variant="subtitle1" sx={{
                    fontSize: '14px',
                    color: 'white',
                    padding: '2px',
                    flexDirection: 'column'
                }}>{track.title}</Typography>

            {/* TODO: allow favoriting and switch between filled and outlined */}
            {/* <FavoriteIcon fontSize='small' sx={{color: 'green'}}/> */}
            <FavoriteBorderIcon fontSize='small' sx={{color: 'white'}}/>
            <Typography variant="subtitle2" sx={{color: 'grey', fontSize: '12px', marginBottom: '3px', marginTop: '2px',marginRight: '3px', marginLeft: '12px', flexDirection: 'column' }}>
                       {track.artist}
             </Typography>
        </ListItem>
        </List>
       
       
   </ThemeProvider>
   

   
  )
}
