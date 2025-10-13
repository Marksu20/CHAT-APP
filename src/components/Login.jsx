import * as React from 'react'
import { useState } from 'react'
import { FaSignInAlt } from 'react-icons/fa'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { auth } from '../firebase/firebase'
import { FormControl,FormHelperText, TextField, InputLabel, Input, InputAdornment, IconButton } from '@mui/material';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import LockOutlineIcon from '@mui/icons-material/LockOutline';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

// TODO #1 9/13: add a log in validation ✅
// TODO try logging in 6:09PM
// TODO #2 9/13: add routing

const Login = ({isLogin, setIsLogin}) => {
  const [userData, setUserData] = useState({
      email: "",
      password: ""
    });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState(false);
  const [showPassword, setShowPassword] = useState(false);
  
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData({ ...userData, [name]: value });
    setErrors({ ...errors, [name]: '' });
  }

  const handleClickShowPassword = () => setShowPassword((show) => !show);
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleMouseUpPassword = (event) => {
    event.preventDefault();
  };

  const validateForm = () => {
    let newErrors = {};

    if (!userData.email) {
      newErrors.email = 'Email is required'
    } else if (!/\S+@\S+\.\S+/.test(userData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    if (!userData.password) {
      newErrors.password = 'Password is required'
    } else if (userData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0 // ???
  }
  
  const handleAuth = async (event) => {
    event.preventDefault();

    if (!validateForm()) return

    setIsLoading(true)

    try {
      await signInWithEmailAndPassword(auth, userData?.email, userData?.password);
      // TODO : redirect to chat page
      console.log('User signed in successfully')
    } catch (error) {
      console.error(error)

      if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password' || error.code === 'auth/invalid-credential') {
        setErrors({
          ...errors,
          password: 'Invalid email or password'
        })
      } else {
        setErrors({
          ...errors,
          password: error.message
        })
      }
    } finally {
      setIsLoading(false)
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
          <h2 className="mt-8 text-center text-2xl/9 font-bold tracking-tight text-indigo-600" >
            Sign In to your account
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm outline-1 -outline-offset-1 outline-gray-100 p-8 rounded-lg shadow-lg">
          <form className="space-y-4" onSubmit={handleAuth}>
              {/* EMAIL */}
              <div className="flex flex-row">
                <MailOutlineIcon className="mt-4 mr-2 text-gray-400" />
                <TextField
                  id="email"
                  name="email"
                  type="email"
                  label="Email Address"
                  variant="standard"
                  placeholder="Enter your email"
                  size="normal"
                  fullWidth
                  value={userData.email}
                  onChange={handleChange}
                  error={!!errors.email}
                  helperText={errors.email}
                />
              </div>

              {/* PASSWORD */}
              <div className="flex flex-row">
                <LockOutlineIcon className="mt-4 mr-2 text-gray-400" />
                <FormControl 
                  className="w-full" 
                  variant="standard" 
                  error={!!errors.password}
                >
                  <InputLabel htmlFor="password">Password</InputLabel>
                  <Input
                    id="password"
                    name="password"
                    variant="standard"
                    placeholder="Enter your password"
                    className="w-full"
                    size="normal"
                    value={userData.password}
                    onChange={handleChange}
                    type={showPassword ? 'text' : 'password'}
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
                  <FormHelperText>{errors.password}</FormHelperText>
                </FormControl>
              </div>

              {/* SUBMIT BUTTON */}
              <div className="mt-10">
              <button
                type="submit"
                disabled={isLoading}
                className="flex justify-center items-center gap-2 w-full rounded-md bg-indigo-600 p-2 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 cursor-pointer"
              >
                {isLoading ? 'SIGN IN...' : <>SIGN IN <FaSignInAlt /></>}
              </button>
            </div>
          </form>
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
        </div>
          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Don't have an account yet?{' '}
            <button 
              className="font-semibold text-indigo-600 hover:text-indigo-500 cursor-pointer"
              onClick={() => setIsLogin(!isLogin)}
            >
              Sign Up
            </button>
          </p>
      </div>
    </>
  )
}

export default Login
