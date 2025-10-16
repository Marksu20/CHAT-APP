import React from 'react'
import { useState } from 'react'
import { FaUserPlus } from 'react-icons/fa'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth, db } from '../firebase/firebase';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { FormControl, TextField, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

const Register = ({isLogin, setIsLogin}) => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    password: ""
  });
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleChangeUserData = (e) => {
    const { name, value } = e.target;

    setUserData((prevState) => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const handleAuth = async () => {
    setIsLoading(true)
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, userData?.email, userData?.password);
      const user = userCredential.user;

      const userDocRef = doc(db, 'users', user.uid);

      await setDoc(userDocRef, {
        uid: user.uid,
        email: user.email,
        username: user.email?.split('@')[0],
        fullName: userData.fullName,
        image: '',
      })
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
            Sign Up to create an account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm outline-1 -outline-offset-1 outline-gray-100 p-8 rounded-lg shadow-lg">
          <form method="POST" className="space-y-6">

            <div className="flex flex-row">
              <PersonOutlineIcon className="mt-4 mr-2 text-gray-400" />
              <TextField
                id="fullname"
                name="fullName"
                type="text"
                label="Full Name"
                variant="standard"
                placeholder="Enter your full name"
                className="w-full"
                size="normal"
                required
                // value
                // onChange={handleChangeUserData}
                // error={}
                // helperText={emailError ? "Please enter a valid email" : ""}
              />
            </div>

            <div className="flex flex-row">
              <MailOutlineIcon className="mt-4 mr-2 text-gray-400" />
              <TextField
                id="email"
                name="email"
                type="email"
                label="Email Address"
                variant="standard"
                placeholder="Enter your email"
                className="w-full"
                size="normal"
                required
                // value
                // onChange={handleChangeUserData}
                // error={}
                // helperText={emailError ? "Please enter a valid email" : ""}
              />
            </div>

            <div className="flex flex-row">
              <LockOutlineIcon className="mt-4 mr-2 text-gray-400" />
              <FormControl className="w-full" variant="standard" required>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input
                  id="password"
                  name="password"
                  variant="standard"
                  placeholder="Enter your password"
                  className="w-full"
                  size="normal"
                  type={showPassword ? 'text' : 'password'}
                  onChange
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'Hide password' : 'Show password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityIcon className="text-gray-400"/> : <VisibilityOffIcon className="text-gray-400"/>}
                      </IconButton>
                    </InputAdornment> 
                  }
                />
              </FormControl>
            </div>

            <div className="flex flex-row">
              <LockOutlineIcon className="mt-4 mr-2 text-gray-400" />
              <FormControl className="w-full" variant="standard" required>
                <InputLabel htmlFor="password">Confirm Password</InputLabel>
                <Input
                  id="confirm-password"
                  name="confirmPassword"
                  variant="standard"
                  placeholder="Confirm your password"
                  className="w-full"
                  size="normal"
                  type={showPassword ? 'text' : 'password'}
                  onChange
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label={
                          showPassword ? 'Hide password' : 'Show password'
                        }
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        onMouseUp={handleMouseUpPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityIcon className="text-gray-400"/> : <VisibilityOffIcon className="text-gray-400"/>}
                      </IconButton>
                    </InputAdornment> 
                  }
                />
              </FormControl>
            </div>

            {/* <div>
              <label htmlFor="fullName" className="block text-sm/6 font-medium text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input 
                  id="fullname" 
                  name="fullName" 
                  type="text" 
                  required 
                  onChange={handleChangeUserData} 
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div> */}
            {/* <div>
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
            </div> */}

            {/* <div>
              <div className="flex items-center justify-between">
                <label htmlFor="password" className="block text-sm/6 font-medium text-gray-600">
                  Password
                </label>
                <div className="text-sm">
                  <a href="#" className="font-semibold text-indigo-600 hover:text-indigo-500">
                    Forgot your password?
                  </a>
                </div>
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
            </div> */}

            <div>
              <button
                type="button"
                onClick={handleAuth}
                className="flex justify-center items-center gap-2 w-full rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
              {isLoading ? (
                <>Sign up...</>
              ) : (
                <>Sign up <FaUserPlus /></>
              )
              }
              </button>
            </div>
          </form>

        </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Already have an account?{' '}
            <button 
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              Sign In
            </button>
          </p>
      </div>
    </>
  )
}

export default Register
