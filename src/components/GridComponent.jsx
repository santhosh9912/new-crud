import React from "react";
import profile from '../images/profile.png'

const GridComponent = () => {
  return (
    <div
      className="container mx-auto px-2 py-8 flex justify-center"
      style={{ width: "100%", height: "492px" }}
    >
      <div className="flex justify-between gap-8 w-[80%] ">
        <div className="col-span-1">
          <h2 className="text-left font-bold text-lg text-gray-500 pb-5 " style={{fontFamily:"Poppins"}}>Testimonials</h2>
          <span className="font-bold text-6xl text-blue-950" style={{fontFamily:'Volkhov'}}>
            What People Say About Us
          </span>
          <div className="flex justify-start mt-0">
            <span className="text-8xl">...</span>
          </div>
        </div>

        {/* Second column */}
        <div className="col-span-1 relative">
          {/* Centered card */}
          <div className="max-w-lg rounded-3xl shadow-2xl shadow-stone-600 p-9 flex flex-col items-center relative">
            {/* Image in the top-left corner */}
            <div className="absolute -top-4 -left-7 w-12 h-12  rounded-full ">
              <img
                src={profile} // Replace with your image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className=" text-center text-lg font-medium text-slate-600" style={{fontFamily:'Poppins'}}>
                “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg font-extrabold text-gray-700" style={{fontFamily:'Poppins'}}>Santhosh Sivan</p>
            <p className="text-lg font-medium text-gray-600">Chennai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
