import React from 'react'
import axios from 'axios'
import { useState, useEffect, useContext } from 'react'
import { UserContext } from '../UserContext'
import { Card, Form, Button, Alert } from 'react-bootstrap'
import { Link } from 'react-router-dom'



export default function FormWithdraw() {

    const  userA  = useContext(UserContext);

    const [currentUserData, setCurrentUserData] = useState({})
    const [inputNumber, setInputNumber] = useState('')
    const [userAmount, setUserAmount] = useState('')

    
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

    const handleDeposit = (email) =>{

        let num1 = Number(currentUserData.amount);
        let num2 = Number(inputNumber);
        let updatedAmount = (num1-num2);
        let newAmount = setUserAmount(num1-num2);

        axios.put(`http://localhost:3001/updateAmount/${userA.email}`, {

            changedAmount: updatedAmount,
        });
        console.log(userAmount)
        console.log(userA.email)
    }

    return (
        <>
        {!userA ? (
            <Card>
            <p>Signed-in is required.</p>
            <p>open an account? please visit <Link to ='/signup'>new account</Link></p>
            </Card>
        ) : (
            <>
                <Card className="form-control text-center mb-4">
                    <Card.Body>
                        <h5>good day: {currentUserData.name}</h5>
                        <p>{userA.email}</p>
                    </Card.Body>
                </Card>
                <Card className="form-control text-center mb-4">
                    <Card.Body>
                        <p>old balance:</p>
                        <h5>{currentUserData.amount}</h5>
                        <p>new balance:</p>
                        <h5>{userAmount}</h5>
                    </Card.Body>
                </Card>
                <Card className="form-control text-center mb-4"> 
                    <Card.Body>
                        <p>**WITHDRAWAL AMOUNT:</p>
                        <input type="number" 
                        className="form-control" 
                        placeholder="Enter amount" 
                        value={inputNumber} onChange={e => setInputNumber(e.currentTarget.value)}/><br/>

                        <button type="submit" 
                        className=" w-100 btn btn-warning" 
                        onClick={handleDeposit}>Withdraw</button>
                    </Card.Body>
                    <Card.Body>
                       <Button type='submit' className='w-100 btn btn-warning' href="/#/profile">complete</Button>
                    </Card.Body>
                </Card>
            </>
        )
        }
</>
    )
}