import React from "react";
import Yellow from "../images/Group 7.png";
import Orange from "../images/Group 11.png";
import Blue from "../images/Group 12.png";
import Rectangle from "../images/Rectangle 17.jpg";
import Option from '../images/OPTIONS.png'
import People from '../images/People.png'

export const TwoColumnGrid = () => {
  return (
    <div
      className="container mx-auto px-3 py-8 mt-10 flex justify-center items-center"
      style={{ width: "100%", height: "492px" }}
    >
      <div className="flex justify-between gap-4 w-[80%]"> {/* Added gap-10 for the gap between columns */}
        <div className="col-span-1 ">
          {/* First column */}
          <div className="text-left font-semibold">
            <h3>Easy and Safe</h3>
          </div>
          <span className="font-semibold text-5xl text-blue-950">
            Book Your Next Trip In 3 Easy Methods
          </span>
          <div className="flex items-center justify-between">
            {/* Images and paragraphs with padding */}
            <div className="flex flex-col items-center">
              <div className="mb-4 pt-4 flex items-center">
                <img src={Yellow} alt="" />
                <p className="ml-4 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
              <div className="mb-4 flex items-center">
                <img src={Orange} alt="" />
                <p className="ml-4 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
              <div className="mb-4 flex items-center">
                <img src={Blue} alt="" />
                <p className="ml-4 max-w-xs">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna,
                  tortor tempus.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Second column */}
        <div className="col-span-1 pl-20">
          {/* Second column */}
          <div
            className="w-370 h-300 border rounded-2xl shadow-md overflow-hidden p-4" // Added p-4 for padding
            style={{ width: "300px", height: "320px" }} // Adjust the height here
          >
            <img
              src={Rectangle}
              className="w-350 h-200 object-cover"
              alt=""
              // Adjust the width and height as needed
            />
            <h3 className="text-left font-serif font-semibold pt-5 pl-5">
              Trip To Greece
            </h3>
            <span className="text-gray-500 pl-5">
              14-29 June | by Robbin joseph
            </span>
            <div className="pt-3 pl-5">
              <img src={Option} alt="" />
            </div>
            <div className="pt-1 pl-6 pb-5">
              <img src={People} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TwoColumnGrid;
