import React, { useState } from 'react'
import Home from './Home'
import Login from './Login'
import { Routes, Route, Navigate } from 'react-router-dom'

const ReactRouter = () => {
    const [isLoggedIn, setIsLoggedIn] = useState(false)

    return (
        <>
            <div>ReactRouter</div>
            <Routes>
                <Route path="/" element={<Protected isLoggedIn={isLoggedIn}> <Home setIsLoggedIn={setIsLoggedIn} /> </Protected>} />
                <Route path="/login" element={<Login setIsLoggedIn={setIsLoggedIn} />} />
            </Routes>
        </>
    )
}

function Protected(props) {
    const isLoggedIn = props.isLoggedIn;
    console.log(props);
    if (isLoggedIn) {
        return props.children
    } else {
        return <Navigate to="/login" />
    }
}

export default ReactRouter