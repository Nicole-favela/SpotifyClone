import React from 'react'
import './BottomPlayer.css'

//import icons for playre controlls
//playcircular
//skip prev and next...

export default function BottomPlayer() {
  return (
    <div className='footer'>
        
      <div className='footer-left'>
        <p>Album & songs</p>
      </div>

      <div className='footer-center'>
        <p>player controles</p>

      </div>
      <div className='footer-right'>
        <p>volume</p>

      </div>
    </div>
  )
}
