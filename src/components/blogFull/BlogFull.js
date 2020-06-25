import React from 'react';

//full blog shown on the details page

function BlogFull({image,alt,title,text,author_image,author,date,city,country}) {
  return (
<div className="container mx-auto max-w-sm rounded overflow-hidden  justify-center bg-teal-800 m-6">
<img className="w-full" src={image} alt={alt}/>
<div className="px-6 py-4">
<div className="font-bold text-xl text-white mb-2">{title}</div>
<p className="text-white text-base"> 
  {text}
</p>
</div>
<div className="px-6 py-4 flex items-center">
  <img className="w-10 h-10 rounded-full mr-4" src={author_image} alt={author}/>
  <div className="text-sm">
    <p className="text-teal-300 leading-none">{author}</p>
    <p className="text-teal-300">{date.toDateString()}</p>
  </div>
  </div>
 <div className="px-6 py-4 text-white">{city},{country}</div>
 </div>
  );
}

export default BlogFull;