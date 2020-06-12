import React, {useState,useEffect} from 'react';
import './Dashboard.css'
import Map from '../map/Map.js'



function Dashboard() {
  return (
    <div className="App">
       <div className="Dashboard">
       <Map></Map>
       </div>
  </div>
  );
}

export default Dashboard;
