import React, { useState} from 'react';
import app from "../../firebase"
import Button from '../button/Button.js'
import './logIn.css'
import history from './../../history'


const LogInForm = () => {

    const [email,setEmail] = useState ('')
    const [password, setPassword] = useState('')
    const [error,setError]= useState(null);
  
//Alternative/formsubmit

    const loginProcess = async (event) => {
      console.log(event)
      event.preventDefault()
      try {
        await app.auth().signInWithEmailAndPassword(email, password)
        setError(null)
        history.push('/')
      } catch (e) {
        setError("Error signing in with password and email!")
      }
    }




  const logInHandler = (event) => {
    const {id, value} = event.currentTarget;
    console.log(event.currentTarget)

    if(id === 'username') {
      setEmail(value);
      console.log(value)
    }
    else if(id === 'password'){
      setPassword(value);
      console.log(value)
    }
};



  return (
    <div id="loginform" className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
        </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" autoComplete='username'placeholder="Username" value={email} onChange = {(event) => logInHandler(event)}/>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" autoComplete='current-password' placeholder="**********" value={password} onChange = {(event) => logInHandler(event)}/>
         <p id="errorMessage" className="text-red-500 text-xs italic">{error}</p>
        </div>
        <div className="flex items-center justify-between">
          <Button handleclick={loginProcess} type="button" btype="basic" text="submit" />
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Carlotta Friedmann All rights reserved.
    </p>
    </div>
  );
}

export default LogInForm;