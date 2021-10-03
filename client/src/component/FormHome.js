import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function FormHome() {
    return (
        <>
       <Card>
           <Card.Body className="form-control text-center mb-4" >
               <p>welcome to </p><h3>easy bank</h3>
               easy at one click
           </Card.Body>
       </Card>
       <Card>
           <Card.Body>
           <p className='text-center mb-1' >new to our service?</p>
           <Button type='submit' className='w-100' variant="outline-warning" href="/#/signup">signup</Button>
            <p className='text-center mb-1'>already have an account?</p>
            <Button type='submit' className='w-100' variant="outline-warning" href="/#/signin">sign in</Button>
           </Card.Body>
       </Card>
       <p className='text-center mb-50'></p>
       <Button type='submit' className='w-100 mb-6' variant="outline-dark" href="/#/staff">for admin</Button>

       </>
    )
}
// style={{ maxWidth: '600px' }}
