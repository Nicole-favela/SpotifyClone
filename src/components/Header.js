import React from 'react'
import './Header.css'
import {Avatar} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStateValue } from '../StateProvider';
import { useState , useEffect} from 'react';
import SpotifyWebApi from 'spotify-web-api-node';
import SearchResultsDropdown from './SearchResultsDropdown';

export default function Header({searchRes, setSearchRes}) {
  const [{user, spotifyApi, token}, dispatch] = useStateValue()
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchRes, setSearchRes]= useState([]);//MOVED TO PARENT-BODY
  //TODO: add choosetrack param to choose the song to pass into bottomplayer and update in body
  function handleSelection(track){
    //setCurPlayingTrack(track)
    setSearchTerm('')
  }

  function handleChange(event){
    setSearchTerm(event.target.value);
  };


  console.log('we r in the header and the user is: ', user?.display_name)

  useEffect(()=>{
    if (!searchTerm){
      return setSearchRes([])//empty search results
    }
    if (!token){
      return

    }
    console.log('in useeffect token is ', token)
    console.log('spotify api is: ', spotifyApi)
    //spotifyApi.setAccessToken(token)

    let cancel = false
    spotifyApi.searchTracks(searchTerm,{ limit: 10}).then(res=>{
      if (cancel) return
      const result = res.body.tracks.items.map(track => {
        const smallestAlbumImage = track.album.images.reduce((smallest, image)=>{
          if (image.height < smallest.height) return image
          return smallest
        }, track.album.images[0])

        return {
          artist: track.artists[0].name,
          title: track.name,
          uri: track.uri,
          albumUrl: smallestAlbumImage.url,
        }
      })
      setSearchRes(result)
      console.log("the search results are: ", searchRes)
    })
    // sets query after typing stops by setting cancel to true
    return ()=> (cancel = true)

  }, [searchTerm, token])
  

    
  return (
    <div className='header'>
     
        <div className='header-left'>
            <SearchOutlinedIcon/>
            <input
              placeholder='What do you want to listen to? '
              type='search'
              value={searchTerm}
              onChange={handleChange}
            />
           
        </div>

        {/* <div >
              {searchRes.map(track=>(
                <SearchResultsDropdown track={track} key={track.uri}/>
              ))}
            </div> */}
       


        <div className='header-right'>
            <Avatar src={user?.body?.images[0]?.url} alt={user?.display_name} size="small"/>
            <h5>{user?.body?.display_name}</h5>

        </div>
        
     </div>
  )
}
