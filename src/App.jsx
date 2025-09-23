import React from 'react'
import Chatbox from './components/Chatbox'
import Chatlist from './components/Chatlist'
import Login from './components/Login'
import Navlinks from './components/Navlinks'
import Register from './components/Register'

const App = () => {
  return (
    <>
      <div className="flex lg:flex-row flex-col w-full h-screen bg-[#F5F5F5]">
        <Navlinks />
        <Chatlist />
        <Chatbox />
      </div>
      <div className="hidden">
        <Login /> 
        <Register />
      </div>
    </>
  )
}

export default App
