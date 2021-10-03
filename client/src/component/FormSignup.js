import React, { useState, useContext, useRef } from 'react'
import firebase from '@firebase/app-compat'
import axios from 'axios'
import { UserContext } from '../UserContext'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link, useHistory } from 'react-router-dom'
import { useAuth } from '../AuthContext'


export const Signup = () => {
    
    const userA = useContext(UserContext);

    const emailRef               = useRef()
    const passwordRef            = useRef()
    const password2Ref           = useRef()
    const firstNameRef           = useRef()
    const lastNameRef            = useRef()
    const phoneRef               = useRef()
    const fundRef                = useRef()

    const [error, setError]       = useState('')
    const [name, setName]         = useState('');
    const [email, setEmail]       = useState('');
    const [password, setPassword] = useState('');
    const [amount, setAmount]     = useState(0);

    const history                = useHistory()

    const { signup }             = useAuth()


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


    async function handleEmailAndPasswordSignup(e){
        e.preventDefault()

        axios.post('http://localhost:3001/post', 
        {name: name, email: email.toLowerCase(), password: password, amount: amount});

        if (passwordRef.current.value !== password2Ref.current.value)
            return setError('Passwords do not match')
      
        try {
            await signup(emailRef.current.value, passwordRef.current.value)
            history.push('/success')
        } catch {
            setError('Email & Password Signin Error')
        }
    }
    
    return<>
            {/* {userA && 
                <>
                    <img src={userA.photoURL} alt='avatar'/>
                    <p>{userA.displayName}</p>
                    <p>{userA.email}</p>
                    <div>
                        <button onClick={signout}>sign-out</button>
                    </div>
                </>       
            } */}
                 { userA ? (
                    <>
                      {history.push('/profile')}
                    </>     
                    ):(
                <>  
                    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link>
                        <p className='text-center mb-1'>sign-in with google</p>
                        <Button type='submit' variant="outline-warning" className='fa fa-google w-100' onClick={authGoogle}></Button>
                        <p className='text-center mb-1'>already have an account?</p>
                        <Button type='submit' variant="outline-warning" className='w-100' href="/#/signin">sign in</Button>
                    <Card>
                        <Card.Body>
                            <h1 className='text-center mb-4'>Sign Up</h1>
                            <h4>I. email and password</h4>
                            {/* {JSON.stringify(currentUser)} */}
                            {error && <Alert varient="danger">{error}</Alert>}
                            <Form>
                                <Form.Group id='email'>
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control type='email' ref={emailRef} value={email} onChange={e => setEmail(e.target.value)}required />
                                </Form.Group>
                                <Form.Group id='password'>
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control type='password' ref={passwordRef} value={password} onChange={e => setPassword(e.target.value)}required />
                                </Form.Group>
                                <Form.Group id='password-2'>
                                    <Form.Label>Confirmed Password</Form.Label>
                                    <Form.Control type='password' ref={password2Ref} required />
                                </Form.Group>
                            </Form>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h4>II. name and contact</h4>
                            {error && <Alert varient="danger">{error}</Alert>}
                                <Form.Group id='name'>
                                    <Form.Label>First Name</Form.Label>
                                    <Form.Control type='text' ref={firstNameRef} value={name} onChange={e => setName(e.target.value)} required />
                                </Form.Group>
                                <Form.Group id='lastname'>
                                    <Form.Label>Last Name</Form.Label>
                                    <Form.Control type='text' ref={lastNameRef}  />
                                </Form.Group>
                                <Form.Group id='lastname'>
                                    <Form.Label>Contact Number</Form.Label>
                                    <Form.Control type='tel' ref={phoneRef} placeholder='ex: 662-935-7450' />
                                </Form.Group>
                        </Card.Body>
                    </Card>
                    <Card>
                        <Card.Body>
                            <h4>III. initial funding</h4>
                            {error && <Alert varient="danger">{error}</Alert>}
                                <Form.Group id='name'>
                                    <Form.Label>initial amount</Form.Label>
                                    <Form.Control type='number' ref={fundRef} placeholder='minimum 100' value={amount} onChange={e => setAmount(e.target.value)} required />
                                </Form.Group>
                        </Card.Body>
                    </Card>
                    <Button  type='submit' className='w-100' variant="warning" onClick={handleEmailAndPasswordSignup}>Sign Up</Button>
                </>
              )}    
         </>
}