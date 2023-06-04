import React from 'react'
import './Login.css'
import spotifylogo from '../assets/spotify.png'
import loginInfo from '../spotify-logic'
import useCredentials from '../useCredentials'

export default function Login() {
  const clientID= useCredentials()
  const loginURL = loginInfo(clientID)

  return (
    // spotify logo and login button
    <div className='login'>
         <img src={spotifylogo} alt="logo"/>
         {/* <strong className='login-text'> Spotify</strong> */}
         {/* link to spotify's login */}
         <a href={loginURL}> LOGIN WITH SPOTIFY</a> 
         
       
    </div>
  )
}
