
import React, { useState, useEffect, createContext } from 'react'
import { app } from './base'

export const UserContext = createContext();

export const UserProvider = ({children}) => {

    const [userA, setUserA] = useState()

    useEffect(() => {
        app.auth().onAuthStateChanged((user) => {
         setUserA(user)
        });
     }, []);

    return <UserContext.Provider value={userA}>{children}</UserContext.Provider>
}