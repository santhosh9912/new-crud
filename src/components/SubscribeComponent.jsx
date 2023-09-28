import React from "react";
import send from '../images/Group 77.png'

export const SubscribeComponent = () => {
  return (
    <div className="container mx-auto max-w-screen-xl px-8 py-5 relative flex justify-center items-center -mt-10">
      <div className="max-w-3xl rounded-tl-top-left rounded-2xl shadow-lg shadow-stone-600 bg-gray-100 relative -ml-11" style={{ width: "2500px", height: "220px" }}>
        <div className="px-24 py-8 flex flex-col items-center">
          {/* Image in the top right corner */}
          <img
            src={send}
            alt="Image"
            className="absolute -top-4 -right-8 w-16 h-16 rounded-full border-2 border-white z-10"
          />
          <p className="text-slate-700  pt-11 font-semibold text-xl " style={{fontFamily:'Poppins'}}>
            Subscribe to get information, latest news, and other interesting offers about Cobham
          </p>
          <div className="mt-4 flex items-center">
            <input
              className="border rounded py-2 px-3 mr-2 w-3/4 text-slate-600"
              type="text"
              placeholder="Your mail"
              name="mail"
            />
            <button className="bg-yellow-500 hover:bg-black text-white font-bold py-2 px-4 rounded">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
