import React from 'react'
import './Header.css'
import {Avatar} from '@mui/material'
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useStateValue } from '../StateProvider';

export default function Header() {
  const [{user}, dispatch] = useStateValue()
  console.log('we r in the header and the user is: ', user?.display_name)
    
  return (
    <div className='header'>
     
        <div className='header-left'>
            <SearchOutlinedIcon/>
            <input
            placeholder='What do you want to listen to? '
            type='text'
            />

        </div>

        <div className='header-right'>
            <Avatar src={user?.body?.images[0]?.url} alt={user?.display_name}/>
            <h4>{user?.body?.display_name}</h4>

        </div>
        
     </div>
  )
}
