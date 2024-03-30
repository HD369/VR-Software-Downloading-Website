// import React from 'react'
import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

export const Usercontext = createContext({}) 

export function UsercontextProvider({children}){
    const [user,setUser]=useState(null);
    useEffect(() => {
        if(!user){
            axios.get('/Profile').then(({data})=>{
                setUser(data)
            })
        }
    }, [])
    return(
        <Usercontext.Provider value={{user,setUser}}>
            {children}
        </Usercontext.Provider>
    )
}
