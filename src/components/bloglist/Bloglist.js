import React from 'react';
import Blogpreview from './../blogpreview/Blogpreview'
import '../map/Blog'
import blog from '../map/Blog';


function Bloglist() {

  const compare = (a,b) => {


    return (b-a)
  }

  return (
    <div className="flex flex-wrap">
      {blog.map(place => (<Blogpreview image={place.image.src} alt={place.image.alt}  title={place.title} author={place.author} date={place.date}></Blogpreview>)).sort(function(a, b) {
  return b - a;
})}
    </div>
  );
}

export default Bloglist;