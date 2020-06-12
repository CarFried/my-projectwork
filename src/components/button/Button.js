
import {ButtonType} from './theme';
import React, {useState,useEffect} from 'react';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'

const Button= ({btype,type,text,handleclick}) => {
  const classNames = ButtonType[btype] + " " + type;
  return (
    <button onClick={handleclick} className={classNames}>{text}</button>
  
  );
}

export default Button;