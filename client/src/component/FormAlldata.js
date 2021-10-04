import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import { useHistory } from 'react-router-dom'


export default function FormAlldata() {

    const [dataCollector, setDataCollector] = useState([])
    const history                = useHistory()
    const password = "admin"; 
    
    useEffect(() => {
        const URL = 'http://localhost:3001'
        axios.get(URL + '/data?admin=true')
        .then((response) => { setDataCollector(response.data) })
        .catch(console.error())
    }, [])

    return (
        <>
            <div>
                <h3> all data goes here: </h3>
                { !password === 'admin' ? ( 
                    <>
                    <div>admin only</div>
                    </>
                ):( 
                    dataCollector.map((value, key) => {
                        return <div key={key}> 
                                <div><h5>{value.name}</h5></div>
                                <div>{value.email}</div>
                                <div>{value.amount}</div>
                            </div>
                    })
                )}
            </div>
        </>
    )
}
