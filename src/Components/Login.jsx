import React from 'react'
import whatsLogo from '../assets/whats.webp'

const Login = () => {
    return (
        <>
            <div>
                <img src={whatsLogo} alt="whatsappimg" id='image' />
                <h1>WhatsApp</h1>
            </div>
            <div className='white'>Login</div>
        </>
    )
}

export default Login