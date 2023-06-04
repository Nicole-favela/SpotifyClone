import React from 'react'
import SpotifyPlayer from "react-spotify-web-playback"
import {useEffect, useState} from 'react'
import { useStateValue } from '../StateProvider'

import './BottomPlayer.css'

//import icons for playre controlls
//playcircular
//skip prev and next...

export default function BottomPlayer({trackUri, accessToken}) {
  const [play, setPlay] = useState(false)
  //const [{ token, item, curPlaying }, dispatch] = useStateValue();
  // useEffect(()=>{
  //     setPlay(true)
  // }, [trackUri]) //update whenever trackUri changes/ whenever we change songs
  // if(!accessToken){
  //     return null
  // }

  return (
    <div className='bottom-player'>
     
        <SpotifyPlayer
            token={accessToken}
            showSaveIcon
            callback={state =>{ //changes state of play to false everytime we arent playing a song
                if(!state.isPlaying) setPlay(false)
            }}
            play={play}
            uris={ trackUri ? [trackUri] : []}
            styles={{
                activeColor: '#fff',
                bgColor: '#383838',
                color: '#fff',
                loaderColor: '#fff',
                sliderColor: '#1cb954',
                trackArtistColor: '#ccc',
                trackNameColor: '#fff',
              }}
        
        />
    

        
      {/* <div className='footer-left'>
        <p>Album & songs</p>
      </div>

      <div className='footer-center'>
        <p>player controles</p>

      </div>
      <div className='footer-right'>
        <p>volume</p>

      </div> */}
    </div>
  )
}
