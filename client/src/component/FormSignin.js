import React, { useState, useContext, useRef } from 'react'
import firebase from '@firebase/app-compat'
import { UserContext } from '../UserContext'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'

export default function Signin() {

    const userA = useContext(UserContext);

    const emailRef               = useRef()
    const passwordRef            = useRef()
    const [error, setError]      = useState('')

    const history                = useHistory()

    const { signin }            = useAuth()

    var provider = new firebase.auth.GoogleAuthProvider();
    
    const authGoogle = () => { 
        firebase.auth()
		.signInWithPopup(provider)
		.then(e => {
			console.log(e);
		})
		.catch(error =>{
			setError('Google Signin Error')
		});
    }


    async function handleEmailAndPasswordSignin(e){
        e.preventDefault()

        try {
            await signin(emailRef.current.value, passwordRef.current.value)
            history.push('/profile')
        } catch {
            setError('Email & Password Signin Error')
        }
    }

    return<>
                <>  
                { userA ? (
                            <>
                            {history.push('/profile')}
                            </>     
                    ):(
                    <>
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <p className='text-center mb-1'>sign-in with google</p>
                        <Button type='submit' className='fa fa-google w-100' variant="outline-warning" onClick={authGoogle}></Button>
                        <Card>
                            <Card.Body>
                                <h1 className='text-center mb-4'>Sign In</h1>
                                {error && <Alert varient="danger">{error}</Alert>}
                                <Form onSubmit={handleEmailAndPasswordSignin}>
                                    <Form.Group id='email'>
                                        <Form.Label>EMAIL</Form.Label>
                                        <Form.Control type='email' ref={emailRef} required />
                                    </Form.Group>
                                    <Form.Group id='password'>
                                        <Form.Label>PASSWORD</Form.Label>
                                        <Form.Control type='password' ref={passwordRef} required />
                                    </Form.Group>
                                    <Button type='submit' className='w-100' variant="warning">Sign in</Button>
                                </Form>
                            </Card.Body>
                        </Card> 
                        <div className='text-center mb-4'>
                                creating <Link to ='/signup'>new account</Link> ?
                        </div> 
                    </>
                    )}                 
                </>
         </>
}
