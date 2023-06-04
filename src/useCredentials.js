import { useState, useEffect } from "react";
import axios from "axios";


export default function useCredentials(){
    const [clientID, setClientID] = useState(''); 
    useEffect(() => {
     
          axios.get('http://localhost:3001/credentials')
          .then(res=>{
              console.log('client id is now: ', res.data)
              setClientID(JSON.stringify(res.data))
              
          }).catch(()=>{ 
              console.log("error getting client id")
          })
  
   
    }, []);
  
    return clientID;
  
}