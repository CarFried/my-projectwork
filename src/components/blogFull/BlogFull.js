import React from 'react';
import './App.css';


function BlogFull() {
  return (
<div class="container mx-auto max-w-sm rounded overflow-hidden  justify-center bg-teal-800 m-6">
<img class="w-full" src={json.image.src} alt={json.image.alt}/>
<div class="px-6 py-4">
<div class="font-bold text-xl text-white mb-2">{json.title}</div>
<p class="text-white text-base"> 
  {json.text}
</p>
</div>
<div class="px-6 py-4 flex items-center">
  <img class="w-10 h-10 rounded-full mr-4" src={json.author_image} alt={json.author}/>
  <div class="text-sm">
    <p class="text-teal-300 leading-none">{json.author}</p>
    <p class="text-teal-300">{json.date}</p>
  </div>
  </div>
 <div class="px-6 py-4 text-white">{json.location.city},{json.location.country}</div>
 </div>
  );
}

export default BlogFull;