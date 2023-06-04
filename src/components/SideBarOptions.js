import React from 'react'
import './SideBarOptions.css'

export default function SideBarOptions({title, Icon}) {
  return (
    <div className='sidebar-option'>
        {/* <img className='side-bar-logo' src="" alt=""></img> */}
        {Icon && <Icon className="side-bar-icon"/>}
        {Icon ? <h4>{title}</h4> : <p>{title}</p>}
        
        {/* sidebar options */}
    </div>
  )
}
