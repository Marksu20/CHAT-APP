import React from 'react'
import { useState, useEffect } from 'react'
import Chatbox from './components/Chatbox'
import Chatlist from './components/Chatlist'
import Login from './components/Login'
import Navlinks from './components/Navlinks'
import Register from './components/Register'
import { auth } from './firebase/firebase'

const App = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const currentUser = auth.currentUser;
    if (currentUser) {
      setUser(currentUser);
    }

    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    
    return () => unsubscribe();
  }, [])

  return (
    <>
      {user ? (
        <div className="flex lg:flex-row flex-col w-full h-screen bg-[#F5F5F5]">
          <Navlinks />
          <Chatlist />
          <Chatbox />
        </div>
        ) : (
        <div className="block">
          { isLogin ? <Login isLogin={isLogin} setIsLogin={setIsLogin} /> : <Register isLogin={isLogin} setIsLogin={setIsLogin}  /> }
        </div>
        )
      }
    </>
  )
}

export default App
