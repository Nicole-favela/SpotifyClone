import React from 'react'
import './Player.css'
import Sidebar from './Sidebar'
import Body from './Body'
import BottomPlayer from './BottomPlayer'
import useAuth from '../useAuth'
import useCredentials from '../useCredentials'
import SpotifyWebApi from 'spotify-web-api-node';
import { useStateValue } from "../StateProvider";
import { useEffect } from 'react'
import { Token } from '@mui/icons-material'



export default function Player({code}) {
  const [{user, token}, dispatch] = useStateValue()
  const clientID = useCredentials()
  const spotifyApi = new SpotifyWebApi({
    clientId: clientID,
  })

  const accessToken = useAuth(code) //custom hook
  useEffect(()=>{
    if (!accessToken){
      return
    }
    if (accessToken){
      dispatch({
        type: 'SET_TOKEN',
        token: accessToken,
      })
      spotifyApi.setAccessToken(accessToken)
      spotifyApi.getMe().then(user =>{
         //add user to reducer
        dispatch({
          type: 'SET_USER',
          user: user
        })
      })
      dispatch({
        type: "SET_SPOTIFY",
        spotifyApi: spotifyApi,
      });
      spotifyApi.getUserPlaylists({ limit: 15}).then((playlists)=>{
        dispatch({
           type:'SET_USER_PLAYLISTS',
           playlists: playlists
        })
      })
      spotifyApi.getMyRecentlyPlayedTracks({limit: 20}).then((recents)=>{
        dispatch({
          type:'SET_RECENTLY_PLAYED_TRACKS',
          recents: recents

        })

      })
      spotifyApi.getMySavedAlbums({limit: 16}).then((musiclibrary)=>{
        dispatch({
          type:'SET_MY_MUSIC_LIBRARY',
          musiclibrary: musiclibrary

        })

      })
      spotifyApi.getMyCurrentPlayingTrack().then((playingrn)=>{
        dispatch({
          type:'SET_CURRENTLY_PLAYING_TRACK',
          playingrn: playingrn

        })

      })
      spotifyApi.getMyCurrentPlaybackState().then((isPlaying)=>{
        dispatch({
          type:'SET_IS_PLAYING',
          isPlaying: isPlaying

        })

      })
      spotifyApi.getNewReleases({limit: 10, offset: 5, country: 'SE'}).then((newreleases)=>{
        dispatch({
          type:'SET_NEW_RELEASES',
          new_releases: newreleases,

        })


      })
    }
},[accessToken])

    //setToken(_token)
  

  return (
    <div className='player'>
        <div className='player-body'>
          {/* {!accessToken && (<div> this shouldnt be here</div>)} */}
            
          
            <Sidebar/>
            
            <Body spotifyApi={spotifyApi}/>
         

        </div>
       {/* <BottomPlayer accessToken={accessToken} trackUri={}/> */}
        
    </div>
  )
}
