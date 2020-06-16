import React from 'react';


function Blogpreview({image,alt,title,author,date,}) {
  return (
<div className="container mx-auto max-w-xs rounded overflow-hidden  justify-center bg-teal-800 m-6">
<img className="w-full h-40" src={image} alt={alt}/>
<div className="px-3 py-3">
<div className="font-bold text-xl text-white mb-2">{title}</div>
</div>
<div className="px-3 py-4 flex items-center">
  <img className="w-10 h-10 rounded-full mr-4" src='/images/author_image.jpg' alt= 'Carlotta Friedmann'/>
  <div className="text-sm">
    <p className="text-teal-300 leading-none">{author}</p>
    <p className="text-teal-300">{date.toDateString()}</p>
  </div>
  </div>
 </div>
  );
}

export default Blogpreview;