import React from 'react'
import './SideBarOptions.css'
import { Avatar } from '@mui/material'

export default function SideBarOptions({title, img, Icon}) {
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
          <h4>{title}</h4> 
          : <p>{title}</p>}
        
        {/* sidebar options */}
    </div>
  )
}
