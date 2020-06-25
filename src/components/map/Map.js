import React, { useState } from 'react';
import GoogleMapReact from 'google-map-react'
import mapStyles from './mapsstyles'
import blog from './Blog'
import Marker from '../marker/Marker.js'
import Infowindow from '../infoWindow/Infowindow.js'


function Map() {
  const [selected, setSelected] = useState(null)
  const handleShowInfo = blog => {
    setSelected(blog)
    console.log(blog)
  }

  const handleCloseInfo = event => {
    setSelected(null)
  }

  //displays map, marker and infowindow

  return (
    <div className="App">
      <div className="Map" style={{ height: "100vh", width: "50vw", justifyContent: "end" }}>

        <GoogleMapReact
          bootstrapURLKeys={{ key: '' }}
          defaultCenter={blog[0].location}
          defaultZoom={12}
          options={{ styles: mapStyles }}
        >
          {blog.map(place => (<Marker lat={place.location.lat} lng={place.location.lng} key={place.date} showInfo={(event => handleShowInfo(place))}></Marker>))}
          {selected && (

            <Infowindow
              title={selected.title}
              author={selected.author}
              date={selected.date}
              author_image={selected.author_image}
              closeInfo={handleCloseInfo}
              lng={selected.location.lng}
              lat={selected.location.lat}
              id={selected.id}

            />
          )}
        </GoogleMapReact>
      </div>
    </div>
  )
}





export default Map;