import React from 'react'
import { useNavigate } from 'react-router-dom'

const Login = ({ setIsLoggedIn }) => {
    const navigate = useNavigate();
    const handleLogin = () => {
        setIsLoggedIn(true)
        alert("userLoggedIn")
        navigate("/")
    }
    return (<>
        <div>Login</div>
        <button onClick={handleLogin}>login</button>
    </>
    )
}

export default Login