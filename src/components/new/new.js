import React,{useContext}from 'react'
import {Redirect} from 'react-router-dom'
import Blogform from '../blogForm/Blogform'
import {AuthContext} from '../Provider/AuthProvider'



function New() {
    const {currentUser} = useContext(AuthContext)
    return (
      <div className="App">
       {currentUser ? <Blogform text="hello"/> :
           <Redirect to={'/Login'}/>}
    </div>
    );
  }
  
  export default New;