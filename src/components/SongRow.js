import React from 'react'
import { useEffect } from 'react'
import './SongRow.css'
import BottomPlayer from './BottomPlayer'
import { useStateValue } from '../StateProvider'
import { useState } from 'react'

export default function SongRow({track, chooseTrack, trackUri }) {
  
  const [{token, recents, new_releases}, dispatch] = useStateValue()
  function handlePlay(){
    chooseTrack(track);
  };
  if(track){
    console.log("track is not undefined")
  }
 
  return (
    <div className='song-row' onClick={handlePlay}>
        <img  className ='song-album' src={track.album.images[0].url} alt=""/>
        <div className='song-info'>
            <h4>{track.album.name}</h4>
            <p>
              

                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </div>
        <div className='bottom-player'>
            <BottomPlayer accessToken={token} trackUri={trackUri}/>
        </div>
      



    </div>
  )
}
