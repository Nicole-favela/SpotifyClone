import React from 'react'
import './Body.css'
import Header from './Header'
import metrospiderverse from "../assets/metro-album-art.png"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SongRow from './SongRow';

import { useStateValue } from "../StateProvider";
import { useEffect, useState } from 'react';


export default function Body({spotifyApi}) {
  const [isLoading, setIsLoading] = useState(true);
  const [{user, recents, new_releases}, dispatch] = useStateValue()
  // if (recents){
  //   console.log("in body recent is: ", recents.body)
  //   setIsLoading(false);
  // }
  useEffect(()=>{
    console.log("in body recent is: ", recents?.body)
    //console.log('new releases are: ', new_releases)
    
    setIsLoading(false)

  }, [recents])
  // if(!token){
  //   console.log('our token is null: ', token)
  // }
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

        {/* <div>
          {recents.body && (<p>recents is non null</p>)}
        </div> */}
        {/* List of songs */}
        <div>
       
        
        {/* {!isLoading && recents?.body.items.track.map((item)=>
          <SongRow track={item.track}/>
        )} */}
         {/* {recents.body !== undefined && recents.body.items.map((recent) => (
            <SongRow track={recent.track} />
         ))} */}
       
        {/* {recents?.body && recents.body.items.track.map((item)=>
          <SongRow track={item.track}/>
        )} */}


        {/* this works below */}
        {/* {!isLoading && new_releases?.body.albums.items.map((item) => (
          <SongRow item={item} />
        ))} */}
         {!isLoading && recents?.body.items.map((item) => (
          <SongRow track={item.track} />
        ))}




      </div>
    
      
    </div>
    </div>
    
  )
}
