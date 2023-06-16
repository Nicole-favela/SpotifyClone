import React from 'react'
import './Sidebar.css'
import SideBarOptions from './SideBarOptions'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import LibraryMusicOutlinedIcon from '@mui/icons-material/LibraryMusicOutlined';
//import spotifylogo from '../assets/spotify-home-logo.png'
import spotifylogo from '../assets/white-spotify-logo.png'
import { useStateValue } from '../StateProvider';

export default function Sidebar() {
  const [{playlists}, dispatch] = useStateValue()
  return (
    <div className='sidebar'>
        <img className='logo' src={spotifylogo} alt="spotify-logo"/>
        <SideBarOptions Icon ={HomeOutlinedIcon} title="Home"/>
        <SideBarOptions Icon={SearchOutlinedIcon} title ="Search"/>
        <SideBarOptions Icon={LibraryMusicOutlinedIcon} title ="Your Library"/>
        <br/>
        <strong className='title'>PLAYLISTS</strong>
        <hr/>
          {/* playlist items */}
        {playlists?.body?.items?.map(playlist=>(
        <SideBarOptions title={playlist.name} img={playlist.images[0].url}/>
        ))}
        {/* <SideBarOptions title="rock"/>
        <SideBarOptions title="hip hop"/>
        <SideBarOptions title="alternative"/> */}

      
    
    </div>
  )
}
