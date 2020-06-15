import React,{useContext} from 'react';
import Logo from './Logo.js'
import Button from '../button/Button.js'
import history from './../../history'
import app from '../../firebase'
import AuthContext from '../Provider/AuthProvider'




const Navbar= () => {

const {currentUser} = useContext(AuthContext)


  const openLogin = (e)=>{
    e.preventDefault();
    app.auth().signOut()
    history.push('/Login')
    console.log("it worked")
  }

  const openDashboard = (e)=>{
    e.preventDefault();
    app.auth().signOut()
    history.push('/')
    console.log("it worked again")
  }

  const openNew = (e)=>{
    e.preventDefault();
    history.push('/new')
    console.log("it worked")
  }

  return (
    <div className="App">
        <nav id="navbar" className=" w-full bg-black">
    <ul className="flex">
      <div id="logo" className="justify-start  m-5">
        <li><Logo/></li>
      </div>
      <div id="title" className="justify-start w-1/3 m-6">
        <li className="text-white  text-xl font-medium font-mono">Travelblog Ruanda</li>
      </div>
      <div id="links" className="flex justify-end w-2/3 my-4 text-white">
       {currentUser && <Button handleclick ={openNew} btype="primary" text="new Blogpost" type="submit"/>}
        <Button handleclick ={currentUser? openDashboard :openLogin} btype="primary" text={currentUser? 'Logout' : 'Login'} type="submit"/>
      </div>
    </ul>
  </nav>

   
    </div>
  );
}

export default Navbar;