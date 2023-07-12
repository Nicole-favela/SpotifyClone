import React from 'react'
import './SideBarOptions.css'
import { Avatar } from '@mui/material'
import { useStateValue } from '../StateProvider';

export default function SideBarOptions({title, img, Icon, onClick, trackinfo, showLibrary, musiclibrary}) {
  const [{sidebarlibraryitem}, dispatch] = useStateValue()
  
  
  const handleLibraryItemSelection = (trackinfo) => {
    if (trackinfo && showLibrary ){ //change this to a different value available to body
      dispatch({
        type: "SET_LIBRARY_ITEM_FROM_SIDEBAR",
        sidebarlibraryitem: trackinfo,
        musiclibrary: musiclibrary.body,
  
      })
  
    }
    // else{
    //   //console.log("track is null in sidebar")
    //   dispatch({
    //     type: "SET_LIBRARY_ITEM_FROM_SIDEBAR",
    //     sidebarlibraryitem: null,
    //     musiclibrary: musiclibrary.body,
  
    //   })
  
    // }
  
  };
  
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
          : <p onClick={()=> handleLibraryItemSelection(trackinfo)}>{title}</p>}
        
        {/* sidebar options */}
    </div>
  )
}
