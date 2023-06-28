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
  const [showSidebarLibary, setShowSidebarLibary] = useState(false)
  const [bannerImg, setBannerImg]= useState('')
  const [bannerText, setBannerText] = useState([])//array of strings
  
  
  //const [lastest, setLatest] = useState();//sets the latest album to play
  const [{user, recents, token, playingrn, isPlaying, sidebarplaylist, selectedSidebarOption, sidebarlibraryitem}, dispatch] = useStateValue()
  useEffect(()=>{
      console.log("the saved album on sidebar selected is : ", sidebarlibraryitem, "it has changed")
      if (sidebarlibraryitem !== null){
        setShowSidebarLibary(true) //the user clicked it, show the album
      }
      else{
        setShowSidebarLibary(false)
      }
     
  }, [sidebarlibraryitem])


    //monitors change to update image on banner
  useEffect(() => {
    //showSidebarLibary ? sidebarlibraryitem?.images[0].url : (searchRes.length > 0 ? searchRes[0].albumUrl:  recents?.body.items[0].track.album.images[0].url)
    //(showSidebarLibary && searchRes.length === 0) ? sidebarlibraryitem?.images[0].url : (searchRes.length > 0 ? searchRes[0].albumUrl : recents?.body.items[0].track.album.images[0].url);
    //let image = (showSidebarLibary) ? sidebarlibraryitem?.images[0].url : (searchRes.length > 0 ? searchRes[0].albumUrl : recents?.body.items[0].track.album.images[0].url);
    let image = (showSidebarLibary) ? sidebarlibraryitem?.images[0].url : recents?.body.items[0].track.album.images[0].url;
    // console.log("tring to change image, image is: ",image)
    // console.log("tring to change image, image is: ",image)
    // let image = ''
    // if(showSidebarLibary){
    //   image = sidebarlibraryitem?.images[0].url 
    // }
    // if (searchRes.length > 0 ){
    //   image = searchRes[0].albumUrl 
    // }
    
    if (selectedSidebarOption === 'Home' || !selectedSidebarOption){
      image = recents?.body.items[0].track.album.images[0].url
    }
    setBannerImg(image)
    // do something with the image URL
  }, [showSidebarLibary, searchRes, searchRes.length, sidebarlibraryitem, recents, selectedSidebarOption]);

  //monitors change to update text in banner
  useEffect(() => {
   
    //recents and library only
   
    
    let strong_text = showSidebarLibary ? sidebarlibraryitem?.name :  'RECENTLY PLAYED';
    let h2_text = showSidebarLibary ? ' ' : 'Jump back in';
   
    let p_tag_text = showSidebarLibary ? `${sidebarlibraryitem?.artists[0].name}\u2022${sidebarlibraryitem?.release_date.split('-')[0]}\u2022${sidebarlibraryitem?.total_tracks} songs` :  'your most recent picks';
    setBannerText([strong_text, h2_text, p_tag_text])
    if (selectedSidebarOption === 'Home'){
      setBannerText(['RECENTLY PLAYED','Jump back in', 'your most recent picks'])
    }
    
   
    // do something with the image URL
  }, [showSidebarLibary, sidebarlibraryitem, recents, selectedSidebarOption]);


  
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
     {/* {selectedSidebarOption === null || selectedSidebarOption ==='Home' ? ():()} */}
     <div className='info'>
      {searchRes.length > 0 ? <img src = {searchRes[0].albumUrl }/> :
        <img src={bannerImg} />
      }

        {/* {showSidebarLibary && (<img src= {sidebarlibraryitem?.images[0].url} alt="album-img"/> )}
        {!showSidebarLibary && (<img src={searchRes.length > 0 ? searchRes[0].albumUrl : recents?.body.items[0].track.album.images[0].url} alt="metro-boom"/>)} */}
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
          {/* <strong> {!showSidebarLibary ? 'RECENTLY PLAYED' : 'Library playlist'}</strong>
          <h2>{!showSidebarLibary ? 'Jump back in' : 'Library playlist'}</h2>
          <p>{!showSidebarLibary ? 'your most recent picks' : 'Library playlist'}</p> */}
           <strong>{bannerText[0]}</strong>
          <h2>{bannerText[1]}</h2>
          <p>{bannerText[2]}</p>

         </div>
        }
        {/* {!showSidebarLibary &&
        (
          <div className='info-text'>
          <strong>library playlist </strong>
          <h2>Jump back in</h2>
          <p>your most recent picks</p>
  
        </div>
        )

        } */}
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
   

  </>
   // </div>
   
    
  )
}
