import React from 'react'
import './Body.css'
import Header from './Header'
import metrospiderverse from "../assets/metro-album-art.png"
import PlayCircleFilledOutlinedIcon from '@mui/icons-material/PlayCircleFilledOutlined';
import PauseCircleFilledIcon from '@mui/icons-material/PauseCircleFilled';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import SongRow from './SongRow';

import { useStateValue } from "../StateProvider";
import { useEffect, useState } from 'react';
import { TroubleshootSharp } from '@mui/icons-material';
import SearchResultsDropdown from './SearchResultsDropdown';


export default function Body({spotifyApi}) {
  const [isLoading, setIsLoading] = useState(true);
  const [curPlayingTrack, setCurPlayingTrack] = useState()
  const [togglePlay, setTogglePlay] = useState(true)
  const [searchRes, setSearchRes]= useState([]);
  
  //const [lastest, setLatest] = useState();//sets the latest album to play
  const [{user, recents, token, playingrn, isPlaying}, dispatch] = useStateValue()
  function chooseTrack(track){
    setCurPlayingTrack(track)
    
  }
  // function playerIsPlaying(){
  //   setPlayStatus(isPlaying?.body.is_playing)
  // }
  const handlePlayClick =()=>{
    //chooseTrack(playingrn?.body.item.TrackObject.album)
    return setTogglePlay(!togglePlay);

  }
  const handlePauseClick=()=>{
    return setTogglePlay(!togglePlay)
  }
 
  useEffect(()=>{
   
    console.log("is pplaying state is: , ", isPlaying?.body?.is_playing)
      if(isPlaying?.body && isPlaying?.body.is_playing || isPlaying?.body?.device?.name === "Spotify Web Player" ){
        setTogglePlay(true)
      }
      else{
        setTogglePlay(false)
      }
     
  }, [isPlaying])
  
  useEffect(()=>{
    console.log("in body recent is: ", recents?.body)
    //console.log('new releases are: ', new_releases)
    
    setIsLoading(false)

  }, [recents])
 
  return (
    
    <div className='body'>
     
      
     {/* top header with avatar and search bar */}
     <Header searchRes={searchRes} setSearchRes={setSearchRes}/>
     {searchRes.length > 0 &&
        <div className='top-search-res'>Top Result</div>
      }

     {/* banner section */}
     <div className='info'>
        <img src={recents?.body.items[0].track.album.images[0].url} alt="metro-boom"/>
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
          {togglePlay && (<PauseCircleFilledIcon className='body-pause-icon' onClick={()=>handlePauseClick()}/>)  }
          {!togglePlay && (<PlayCircleFilledOutlinedIcon className='body-play-icon' onClick={()=>handlePlayClick()}/>)}
          <FavoriteOutlinedIcon fontSize='medium'/>
          <MoreHorizOutlinedIcon />

        </div>

       {searchRes.length > 0 ?   
            <div >
              {searchRes.map(track=>(
                <SearchResultsDropdown track={track} key={track.uri}/>
              ))}
            </div>
            :
            <div>
            {!isLoading && recents?.body.items.map((item) => (
              <SongRow track={item.track} key={item.played_at} chooseTrack={chooseTrack} trackUri={curPlayingTrack?.uri} />
            ))}
            </div>

       
      }
        
      </div>
    
      
    </div>
    // </div>
    
  )
}
