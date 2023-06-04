import React from 'react'
import './Body.css'
import Header from './Header'
import metrospiderverse from "../assets/metro-album-art.png"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SongRow from './SongRow';

import { useStateValue } from "../StateProvider";


export default function Body({spotifyApi}) {
  const [{user, token}, dispatch] = useStateValue()
  if(!token){
    console.log('our token is null: ', token)
  }
  return (
    <div className='body'>
      
     {/* top header with avatar and search bar */}
     <Header spotifyApi={ spotifyApi }/>

     {/* banner section */}
     <div className='info'>
        <img src={metrospiderverse} alt="metro-boom"/>
        {/* {token && (<p>we have our token</p>)} */}
        {/* {user && (<p>we have our user as {user.body.display_name}</p>)} */}
        <div className='info-text'>
          <strong>RECENTLY PLAYED </strong>
          <h2>Jump back in</h2>
          <p>your most recent picks</p>

        </div>
        </div>
      
      <div className='body-songs'>
        <div className='body-icons'>
          <PlayCircleFilledOutlinedIcon className='body-play-icon'/>
          <FavoriteOutlinedIcon fontSize='medium'/>
          <MoreHorizOutlinedIcon />

        </div>
        {/* List of songs */}
        {/* {discover_weekly?.track.items.map(()=>
          <SongRow track={item.track}/>
        )} */}

      </div>
    
      
    </div>
  )
}
