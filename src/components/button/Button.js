
import {ButtonType} from './theme';
import React from 'react';


const Button= ({btype,type,text,handleclick}) => {
  const classNames = ButtonType[btype] + " " + type;
  return (
    <button onClick={handleclick} className={classNames}>{text}</button>
  
  );
}

export default Button;