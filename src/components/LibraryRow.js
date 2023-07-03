import React from 'react'
import { useEffect } from 'react'
import './SongRow.css'
import BottomPlayer from './BottomPlayer'
import { useStateValue } from '../StateProvider'
import { useState } from 'react'
 //allows user to view songs in library album
export default function LibraryRow({track, chooseTrack, trackUri }) {
  
  const [{token}, dispatch] = useStateValue()
  function handlePlay(){
    chooseTrack(track);
  };
 
 
  return (
    <>
    <div className='song-row' onClick={handlePlay}>
        <div className='song-info'>
            <h4>{track.name}</h4>
            <p>
              

                {track.artists.map((artist) => artist.name).join(", ")} 
            </p>
        </div>
       
    </div>
     <div className='bottom-player'>
     <BottomPlayer trackUri={trackUri} />
 </div>
 </>

  )
}
