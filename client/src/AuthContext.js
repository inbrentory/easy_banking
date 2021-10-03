import React, {useContext, useState, useEffect, createContext} from 'react'
import { auth } from './base'


const AuthContext = createContext()

export function useAuth(){
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [currentUser, setCurrentUser] = useState()
    const [loading, setLoading]  = useState(true)

    function signup(email, password){
        return auth.createUserWithEmailAndPassword(email,password) // FIREBASE COMMAND
    }

    function signin(email, password){
        return auth.signInWithEmailAndPassword(email,password) // FIREBASE COMMAND
    }

    function signout(){
        auth.signOut() // FIREBASE COMMAND
    }

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged( user => {
            setCurrentUser(user)
            setLoading(false)
        });
        return unsubscribe
    }, [])

    const value = {
        currentUser, 
        signup,
        signin,
        signout,
    }
    return (
        <AuthContext.Provider value={value}>
            {!loading && children}
        </AuthContext.Provider>
    )
}
