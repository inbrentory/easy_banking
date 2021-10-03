import React from 'react'
import axios from 'axios'
import firebase from '@firebase/app-compat'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { useAuth } from '../AuthContext'
import { useHistory } from 'react-router'
import { AmountContext } from '../AmountContext'



export default function FormProfile() {

    const  userA  = useContext(UserContext);
    const [ newAmount ] = useContext(AmountContext);

    const [currentUserData, setCurrentUserData] = useState({})

    const { signout } = useAuth()

    const history = useHistory()

    useEffect(() => {
        axios
        .get(`http://localhost:3001/${userA.email}`)
        .then(response => {
            console.log(response)
            setCurrentUserData(response.data)
        })
        .catch(error => {
            console.log(error)
        })
    }, [userA.email])

    const handleSignout = () => {
        signout();
        history.push('/')
    }

    return (
            <>
                <Card className="form-control text-center mb-4">
                    <Card.Body>
                        <p>successfully signed-in</p>
                            {userA && 
                                 <>
                                    <h5>welcome: {currentUserData.name}</h5>
                                    <p>{userA.email}</p>
                                </>       
                            }
                    </Card.Body>
                </Card>
                <Card className="form-control text-center mb-4">
                    <Card.Body>
                         <p>current balance:</p>
                         <h5>{currentUserData.amount}</h5>
                    </Card.Body>
                </Card>
                <Card className="form-control text-center mb-4">
                    <Card.Body>
                       <Button type='submit' className='w-100 btn btn-warning' href="/#/deposit">deposit</Button>
                    </Card.Body>
                    <Card.Body>
                       <Button type='submit' className='w-100 btn btn-warning' href="/#/withdraw">withdraw</Button>
                    </Card.Body>
                </Card>
                <Card>
                    <Card.Body>
                       <button className="w-100 btn btn-secondary"onClick={handleSignout}>sign-out</button>
                    </Card.Body>
                </Card>
            </>
    )
}
