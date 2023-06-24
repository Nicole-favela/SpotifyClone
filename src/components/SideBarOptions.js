import React from 'react'
import './SideBarOptions.css'
import { Avatar } from '@mui/material'
import { useStateValue } from '../StateProvider';

export default function SideBarOptions({title, img, Icon, playlist, showLibrary, setShowLibrary, onClick}) {
  const [{playlists}, dispatch] = useStateValue()
  
  // function selectPlaylist(playlist){
  //   // playlists?.body.items[0].name
  //   dispatch({
  //     type: "SET_SELECTED_PLAYLIST_FROM_SIDEBAR",
  //     sidebarplaylist: playlist,
  //   });

  // }
  
  return (
    <div className='sidebar-option'>
        {/* <img className='side-bar-logo' src="" alt=""></img> */}
        {Icon && <Icon className="side-bar-icon"/>}
        {!Icon &&
        <Avatar 
                        
                  
              src ={img} style={{height: '40px', width: '40px' , margin: '8px'}}
        />
      }
        {Icon ? 
          <h4 onClick={onClick} >{title}</h4> 
          : <p >{title}</p>}
        
        {/* sidebar options */}
    </div>
  )
}
