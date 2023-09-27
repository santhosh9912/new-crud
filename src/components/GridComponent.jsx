import React from "react";
import profile from '../images/profile.png'

const GridComponent = () => {
  return (
    <div
      className="container mx-auto px-4 py-8"
      style={{ width: "1250px", height: "492px" }}
    >
      <div className="grid grid-cols-2 gap-10">
        <div className="col-span-1">
          <h2 className="text-left font-bold text-lg">Testimonials</h2>
          <span className="font-bold text-6xl text-blue-950">
            What People Say About Us
          </span>
          <div className="flex justify-start mt-0">
            <span className="text-8xl">...</span>
          </div>
        </div>

        {/* Second column */}
        <div className="col-span-1 relative">
          {/* Centered card */}
          <div className="max-w-sm rounded-3xl  shadow-lg p-9 flex flex-col items-center relative">
            {/* Image in the top-left corner */}
            <div className="absolute -top-4 -left-7 w-12 h-12  rounded-full ">
              <img
                src={profile} // Replace with your image URL
                alt="Profile"
                className="w-full h-full object-cover"
              />
            </div>
            <p className="text-opacity-10 text-center">
                “On the Windows talking painted pasture yet its express parties
              use. Sure last upon he same as knew next. Of believed or diverted
              no.”
            </p>
            <p className="text-lg font-semibold text-blue-950">Santhosh Sivan</p>
            <p className="text-lg font-semibold text-blue-950">Chennai, India</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GridComponent;
