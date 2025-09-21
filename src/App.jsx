import React from 'react'
import Chatbox from './components/Chatbox'
import Chatlist from './components/Chatlist'
import Login from './components/Login'
import Navlinks from './components/Navlinks'
import Register from './components/Register'

const App = () => {
  return (
    <div>
      <div className="flex lg:flex-row flex-col items-start w-[100%] bg-[#F5F5F5]">
        <Navlinks />
        <Chatlist />
        <Chatbox />
      </div>
      <div className="hidden">
        <Login /> 
        <Register />
      </div>
    </div>
  )
}

export default App
