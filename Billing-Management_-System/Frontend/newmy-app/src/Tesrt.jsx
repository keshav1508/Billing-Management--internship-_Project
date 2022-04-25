import React, { useEffect } from 'react'
import { useState } from 'react'
import { Button } from 'react-bootstrap'
import { useHistory } from 'react-router'

function Tesrt() {

    const [user,setUser]= useState("")
    const [pass,setPass]= useState("")
    const history=useHistory()
    useEffect(() => {
       if(localStorage.getItem('user-info')){
           history.push("/add")
       } 
        
    }, [])
 
    
    return (
        <>
                   <div> <h1>LOGIN PAGE</h1> </div> 
                  <div> <input type="text" placeholder="User id" onChange={(e)=>setUser(e.target.value)} />  </div> 
                  <div> <input type="text" placeholder="password" onChange={(e)=>setPass(e.target.value)} /> </div> 
                  <Button onClick={login} >Log IN</Button>
                  
                    
        </>
                   
                )
}

export default Tesrt
