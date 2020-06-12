import React, {useState,useEffect} from 'react';
import './infowindow.css'
import {Link} from 'react-router-dom'


const Infowindow =({title,date,author,closeInfo,author_image}) => {
    return (
    <div id="test" className="Infowindow">
    <span className="close"onClick={closeInfo}></span>
      <h1 className="font-bold text-lg">{title}</h1>
      <br/>
    <div className="flex justify-between">
      <h3 className='font-medium text-sm'>visiting date:</h3>
      <h3 className='font-medium text-sm'>{date}</h3>
      </div>
      <div className="flex justify-between">
      <h3 className='font-medium text-sm'>{author}</h3>
      <img src={author_image} alt="image" className="w-5 h-5 rounded-full"/>
      </div>
      <h2 className='font-medium text-teal-200 hover:text-black'><Link to="/post/id">Details</Link></h2>
    </div>
    )
    }
  export default Infowindow;