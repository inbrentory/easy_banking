import React, { useState, useEffect } from 'react'
import { Button, Card } from 'react-bootstrap'
import axios from 'axios'
import { useHistory } from 'react-router'

export default function FormSuccess() {

    const [ staff, setStaff ] = useState()
    const [dataCollector, setDataCollector] = useState([])
    const history                = useHistory()

    
    const handlechange = () =>{

        let password = 'secret'
        if(staff === password){
            history.push('/allData')
        } else {
            console.error()
            history.push('/')
        }
    }
    return (
        <Card>
            <h6 className='text-center mb-5 mt-5'>validation code required</h6>
            <input type='password' onChange={e => setStaff(e.currentTarget.value)}></input>.
            <Button type='submit' onClick={handlechange}className='w-100 btn btn-warning'>submit</Button>

        </Card>
    )
}
