import React from 'react'
import { Button, Card } from 'react-bootstrap'

export default function FormSuccess() {
    return (
        <Card>
            <h3 className='text-center mb-1'>congratulations!</h3>
            <p className='text-center mb-1'>your account has been approved</p>
            <p className='text-center mb-1'>access to your account</p>
             <Button type='submit' variant="outline-warning" className='w-100' href="/#/profile">manage account</Button>
            <p className='text-center mb-1'>already have an account?</p>
             <Button type='submit' variant="outline-warning" className='w-100' href="/#/signin">sign in</Button>
        </Card>
    )
}
