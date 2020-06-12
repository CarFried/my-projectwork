import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Button from '../button/Button.js'
import './logIn.css'

const LogInForm = ({ input }) => {

  return (
    <div id="loginform" className="w-full max-w-xs">
      <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="username">
            Username
        </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="username" type="text" placeholder="Username" />
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
        </label>
          <input
            className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password" type="password" placeholder="******************" />
          <p id="errorMessage" className="text-red-500 text-xs italic">Please type in password.</p>
        </div>
        <div className="flex items-center justify-between">
          <Button type="submit" btype="basic" text="submit" />
        </div>
      </form>
      <p className="text-center text-gray-500 text-xs">
        &copy;2020 Carlotta Friedmann All rights reserved.
    </p>
    </div>
  );
}

export default LogInForm;