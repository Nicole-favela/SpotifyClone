import React from 'react'
import { useEffect } from 'react'
import './SongRow.css'

export default function SongRow({track}) {
  if(track){
    console.log("track is not undefined")
  }
 
  return (
    <div className='song-row'>
        <img  className ='song-album' src={track.album.images[0].url} alt=""/>
        <div className='song-info'>
            {/* <h1>{track.album.name}</h1> */}
            <p>
              

                {track.artists.map((artist) => artist.name).join(", ")} -{" "}
                {track.album.name}
            </p>
        </div>
      



    </div>
  )
}
