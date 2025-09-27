import React from 'react'
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'

const Login = ({isLogin, setIsLogin}) => {
  const [userData, setUserData] = useState({
      email: "",
      password: ""
    });
  
    const handleChangeUserData = (e) => {
      const { name, value } = e.target;
  
      setUserData((prevState) => ({
        ...prevState,
        [name]: value
      }));
    };
  
    const handleAuth = async () => {
      try {
        alert("Register Successful" )
      } catch (error) {
        console.error(error)
      }
    }

  return (
    <>
      <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          {/* LOGO */}
          {/* <img 
            src="https://tailwindcss.com/plus-assets/img/logos/mark.svg?color=indigo&shade=600" 
            alt="Cat-Chat" 
            className="mx-auto h-10 w-auto"  
          /> */}
          <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-gray-900" >
            Sign in to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm outline-1 -outline-offset-1 outline-gray-100 p-8 rounded-lg shadow-lg">
          <form method="POST" className="space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm/6 font-medium text-gray-900">
                Email Address
              </label>
              <div className="mt-2">
                <input 
                  id="email" 
                  name="email" 
                  type="email" 
                  required 
                  onChange={handleChangeUserData}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-600">
                  Password
                </label>
                {/* <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div> */}
              </div>
              <div className="mt-2">
                <input 
                  id="password" 
                  name="password" 
                  type="password"
                  required 
                  onChange={handleChangeUserData} 
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div>
              <button
                type="button"
                onClick={handleAuth}
                className="flex justify-center items-center gap-2 w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                Sign in <FaSignInAlt />
              </button>
            </div>
          </form>

        </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account yet?{' '}
            <button 
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              Sign up
            </button>
          </p>
      </div>
    </>
  )
}

export default Login
