import React from 'react';

//displays marker
    
  const Marker = ({showInfo}) => {
    return (
      <img
        src= "https://img.icons8.com/material-sharp/48/000000/marker.png"
        alt="here should be a marker"
        style={{ position: 'absolute', left: '-32px', top: '-64px' }}
        className="marker"
        onClick ={showInfo}
      />
    )
  }
  
  
  export default Marker;