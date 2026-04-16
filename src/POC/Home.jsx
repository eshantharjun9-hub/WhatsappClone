import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = ({ setIsLoggedIn }) => {
    const navigate = useNavigate()
    const handleLogOut=()=>{
        alert("userLoggedOut")
        setIsLoggedIn(false)
        navigate("/login")
    }
    return (
        <>
        <div>Home</div>
        <button onClick={handleLogOut}>logout</button>
        </>
    )
}

export default Home