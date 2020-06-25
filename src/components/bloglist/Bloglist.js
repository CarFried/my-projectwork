import React from 'react';
import Blogpreview from './../blogpreview/Blogpreview'
import '../map/Blog'
import blog from '../map/Blog';



//maps through the blog array and sorts the blogposts to the newest date




function Bloglist() {

  let newArray = [];
  newArray = blog.sort((a, b) => b.date - a.date)



  return (
    <div className="flex flex-wrap">

      {newArray.map(place => (<Blogpreview key={place.id} id={place.id} image={place.image.src} alt={place.image.alt} title={place.title} author={place.author} date={place.date}></Blogpreview>))}
    </div>
  );
}

export default Bloglist;