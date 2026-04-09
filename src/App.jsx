import React from 'react'
import Chat from './Components/Chat'
import Home from './Components/Home'
import Login from './Components/Login'
import NotFound from './Components/NotFound'
import { Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
      <h1>WhatsApp Clone</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/chat/:chatid" element={<Chat />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  )
}

export default App