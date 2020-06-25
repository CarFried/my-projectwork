import React from 'react';
import './Dashboard.css'
import Map from '../map/Map.js'
import Bloglist from '../bloglist/Bloglist'

//combines Map and Bloglist in one Dashboard

function Dashboard() {
  return (
    <div className="App" style={{ height: "100vh" }}>
      <div className="Dashboard">
        <Map></Map>
        <Bloglist />
      </div>
    </div>
  );
}

export default Dashboard;
