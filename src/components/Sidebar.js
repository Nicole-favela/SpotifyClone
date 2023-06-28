import React from 'react'
import './Sidebar.css'
import SideBarOptions from './SideBarOptions'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
//import spotifylogo from '../assets/spotify-home-logo.png'
import spotifylogo from '../assets/white-spotify-logo.png'
import { useStateValue } from '../StateProvider';
import { useState } from 'react';

export default function Sidebar() {
  const [{playlists, musiclibrary,  sidebarlibraryitem}, dispatch] = useStateValue()
  const [showLibrary, setShowLibrary] = useState(false)
  const [showHome, setShowHome] = useState(false)
//   const handleHomeClick = () => {
//     setShowLibrary(false);
//   };
  
//   const handleSearchClick = () => {
//     setShowLibrary(false);
//   };
//   const handleLibraryClick = () => {
//     setShowLibrary(true);
  
//  }
const handleSidebarOptionClick = (option) => {
  if(option ==='Your Library'){
    setShowLibrary(true)
  }
  if(option ==='Home'){
    setShowLibrary(false)
  }
  dispatch({ type: 'SET_SELECTED_SIDEBAR_OPTION', selectedOption: option });
}

 
  
  
  return (
    <div className='sidebar'>
        <img className='logo' src={spotifylogo} alt="spotify-logo"/>
        <SideBarOptions Icon ={HomeOutlinedIcon} title="Home" onClick={() => handleSidebarOptionClick('Home')}/>
        <SideBarOptions Icon={SearchOutlinedIcon} title ="Search" onClick={() => handleSidebarOptionClick('Search')}/>
        <SideBarOptions  Icon={LibraryMusicOutlinedIcon}  title ="Your Library" onClick={() => handleSidebarOptionClick('Your Library')}/>
        <br/>
        {showLibrary ?
        <>
        <strong className='title'>LIBRARY</strong>
        <hr/>
          {/* playlist items */}
        {musiclibrary?.body?.items?.map(track=>(
        <SideBarOptions  title={track.album.name} img={track.album.images[0].url} trackinfo={track.album} showLibrary={showLibrary}/>
        ))}
        </>

        :
        <>
        <strong className='title'>PLAYLISTS</strong>
        <hr/>
          {/* playlist items */}
        {playlists?.body?.items?.map(playlist=>(
        <SideBarOptions  title={playlist.name} img={playlist.images[0].url} playlist ={playlist}/>
        ))}
        </>

}
       
       

      
    
    </div>
  )
}
