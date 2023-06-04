import React, { useState, useEffect } from 'react'
import axios from 'axios'

export default function useAuth(code){
    const [accessToken, setAccessToken] = useState()
    const [refreshToken, setRefreshToken] = useState()
    const [expiresIn, setExpiresIn] = useState()

    useEffect(()=>{
        axios.post('http://localhost:3001/login',{
            code,
        })
        .then(res=>{
            console.log('useauth login: ', res.data)
            setAccessToken(res.data.accessToken)
            setRefreshToken(res.data.refreshToken)
            setExpiresIn(res.data.expiresIn)
            
            window.history.pushState({}, null, '/') //modifies url to not show code after url
        }).catch(()=>{ //if there is an error, redirect to home/login
            window.location = '/'
        })

    }, [code])

    useEffect(()=>{ //whenever refresh/ expiresIn token changes to something

        if (!refreshToken || !expiresIn) {
            return 
        
        }   
        const interval = setInterval(()=>{
            axios.post('http://localhost:3001/refresh',{
                refreshToken,
            })
            .then(res=>{
                setAccessToken(res.data.accessToken)
                setExpiresIn(res.data.expiresIn)
                
                // window.history.pushState({}, null, '/') //modifies url to not show code after url
            }).catch((err)=>{ //if there is an error,  redirect to home/login
                console.log(err)
                window.location = '/'
            })
    

         }, (expiresIn - 60) * 1000)
       return ()=> clearInterval(interval)
    }, [refreshToken, expiresIn]) 
    return accessToken //allows us to search, play songs: generated from code
}
