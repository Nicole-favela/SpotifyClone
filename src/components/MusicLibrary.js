import React from 'react'
import './Body.css'

export default function MusicLibrary(){
  return (
    <>
     <div className='body'>
       <div className='info'>
       <img src={searchRes.length > 0 ? searchRes[0].albumUrl : recents?.body.items[0].track.album.images[0].url} alt="metro-boom"/>
       {/* {token && (<p>we have our token</p>)} */}
       {/* {user && (<p>we have our user as {user.body.display_name}</p>)} */}
       {searchRes.length > 0 ?
       <div className='info-text'>
          <h2>{searchRes[0].title}</h2>
         <strong>{searchRes[0].artist}</strong>
        
         {/* <p>your most recent picks</p> */}

       </div>

       :
       <div className='info-text'>
       <strong>RECENTLY PLAYED </strong>
       <h2>Jump back in</h2>
       <p>your most recent picks</p>

     </div>
       }
       </div>
       
     
     <div className='body-songs'>
       <div className='body-icons'>
         {togglePlay && (<PauseCircleFilledIcon className='body-pause-icon' onClick={()=>handlePauseClick()}/>)  }
         {!togglePlay && (<PlayCircleFilledOutlinedIcon className='body-play-icon' onClick={()=>handlePlayClick()}/>)}
         <FavoriteOutlinedIcon fontSize='medium'/>
         <MoreHorizOutlinedIcon />

       </div>
       </div>
       </div>
     </>
     )
}
