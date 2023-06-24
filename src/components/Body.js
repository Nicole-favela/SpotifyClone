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
import BottomPlayer from './BottomPlayer';


export default function Body({spotifyApi}) {
  const [isLoading, setIsLoading] = useState(true);
  const [curPlayingTrack, setCurPlayingTrack] = useState()
  const [togglePlay, setTogglePlay] = useState(true)
  const [searchRes, setSearchRes]= useState([]);
  const [sidebarplaylistselect, setsidebarplaylistselect] = useState({})
  
  //const [lastest, setLatest] = useState();//sets the latest album to play
  const [{user, recents, token, playingrn, isPlaying, sidebarplaylist}, dispatch] = useStateValue()
  useEffect(()=>{
      console.log("the side bar playlist clicked is: ", sidebarplaylist)
      setsidebarplaylistselect(sidebarplaylist)
  }, [sidebarplaylist])
  
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
   
    //console.log("is pplaying state is: , ", isPlaying?.body?.is_playing)
      if(isPlaying?.body && isPlaying?.body.is_playing || isPlaying?.body?.device?.name === "Spotify Web Player" ){
        setTogglePlay(true)
      }
      else{
        setTogglePlay(false)
      }
     
  }, [isPlaying])
  
  useEffect(()=>{
    //console.log("in body recent is: ", recents?.body)
    //console.log('new releases are: ', new_releases)
    
    setIsLoading(false)

  }, [recents])
 
  return (
    <>
    <div className='body'>
     {/* top header with avatar and search bar */}
     <Header searchRes={searchRes} setSearchRes={setSearchRes}/>
     {searchRes.length > 0 &&
        <h2>Top Result</h2>
      }

     {/* banner section */}
     <div className='info'>
        <img src={searchRes.length > 0 ? searchRes[0].albumUrl : recents?.body.items[0].track.album.images[0].url} alt="metro-boom"/>
        {/* {token && (<p>we have our token</p>)} */}
        {/* {user && (<p>we have our user as {user.body.display_name}</p>)} */}
        {searchRes.length > 0 ?
        <div className='info-text'>
           <h2>{searchRes[0].title}</h2>
          <strong>{searchRes[0].artist}</strong>
         
          {/* <p>your most recent picks</p> */}

        </div>

        :
        <div className='info-text'>
        <strong>RECENTLY PLAYED </strong>
        <h2>Jump back in</h2>
        <p>your most recent picks</p>

      </div>
        }
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
                <SearchResultsDropdown track={track} key={track.uri} chooseTrack={chooseTrack} />
              ))}
               
                  <BottomPlayer trackUri={curPlayingTrack?.uri} />
             
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
   

     {/* playlist body to be rendered */}
    
  </>
   // </div>
   
    
  )
}
