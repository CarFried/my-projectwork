import React, { useContext } from 'react';
import Logo from './Logo.js'
import Button from '../button/Button.js'
import history from './../../history'
import app from '../../firebase'
import AuthContext from '../Provider/AuthProvider'
import { Link } from 'react-router-dom'


//gets currentUser from useContext




const Navbar = () => {

  //currentUser info from useContext
  const { currentUser } = useContext(AuthContext)

  console.log(history.location.pathname)

  // loginform opens
  const openLogin = (e) => {
    e.preventDefault();
    history.push('/Login')
    console.log("it worked")
  }

 
  //logout function 
  const openLogout = (e) => {
    e.preventDefault();
    app.auth().signOut()
    history.push('/')
    console.log("it worked again")
  }
    

  //new Blogpost page opens
  const openNew = (e) => {
    e.preventDefault();
    history.push('/new')
    console.log("it worked")
  }


  //displays Navbar - if currentUser show logout button else login button
  return (
    <div className="App">
      <nav id="navbar" className=" w-full bg-black">
        <ul className="flex">
          <div id="logo" className="justify-start  m-5">
            <li><Logo /></li>
          </div>
          <div id="title" className="justify-start w-1/3 m-6">
            <li className="text-white  text-xl font-medium font-mono">Travelblog Ruanda</li>
          </div>
          <div id="links" className="flex justify-end w-2/3 my-4 text-white">
            <h2 className='font-medium mr-6 mt-3 text-white hover:text-black'><Link to='/contact'>Contact</Link></h2>
            {currentUser &&
            <Button handleclick={openNew} btype="primary" text="new Blogpost" type="submit" />}
            <Button handleclick={currentUser ? openLogout : openLogin} btype="primary" text={currentUser ? 'Logout' : 'Login'} type="submit" />
          </div>
        </ul>
      </nav>


    </div>
  );
}

export default Navbar;