import React from 'react';


//Contact Page



function Contact() {
  return (
    <div className="App">
      <div className="Login">
        <div id="center" className="container mx-auto max-w-sm rounded overflow-hidden bg-white shadow-lg mt-10">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Name:</div>
            <div className="font-bold  text-gray-700 mb-2">Carlotta Friedmann</div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Projekt:</div>
            <div className="font-bold  text-gray-700 mb-2">This is a travelblog about my dream destination Ruanda. For me it was a learning project to try out and learn as many things as possible.</div>
          </div>
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Adress:</div>
            <div className="font-bold  text-gray-700 mb-2">Borselstraße 7 <br />22765 Hamburg<br /> friedmanncarlotta@gmail.com <br />+4917681067560</div>
          </div>
          <div className="container mx-auto max-w-sm rounded overflow-hidden bg-teal-700 shadow-lg">
            <div className="px-6 py-4">
              <div className="font-bold text-xl  text-white mb-2">This was a project of the Hamburg Coding School</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;