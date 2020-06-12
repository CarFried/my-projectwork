import React, {useState,useEffect} from 'react';
import Logo from './Logo.js'
import Button from '../button/Button.js'
import history from './../../history'




const Navbar= ({}) => {

  const openLogin = (e)=>{
    e.preventDefault();
    history.push('/Login')
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
        <li className="text-white  text-xl font-medium font-mono"><a href=""></a>Travelblog Ruanda</li>
      </div>
      <div id="links" className="flex justify-end w-2/3 my-4 text-white">
        <button id="newBlogPost"
          className="bg-teal-700 hover:bg-teal-100  hover:text-black text-white font-medium px-3 py-1 mr-5 rounded-full border-solid border-2 border-teal-900">new BlogPost
        </button>
        <Button handleclick ={openLogin} btype="primary" text="LogIn" type="submit"/>
      </div>
    </ul>
  </nav>

   
    </div>
  );
}

export default Navbar;