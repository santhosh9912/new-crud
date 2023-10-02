import React from "react";
import { FaGooglePlay } from "react-icons/fa"

export const Footer = () => {
  return (
    <div className="container mx-auto  max-w-screen-lg ">
      <div class="flex items-end w-full min-h-screen bg-white -my-80  ">
        <footer class="w-full text-gray-700 body-font ">
          <div class="container flex flex-col flex-wrap px-5 py-12 mx-auto md:items-center lg:items-start md:flex-row md:flex-no-wrap ">
            <div class="flex-shrink-0 w-64 mx-auto text-center md:mx-0 md:text-left">
              <a class="flex items-center justify-center font-medium text-gray-900 title-font md:justify-start">
                <h2 className="font-bold text-2xl text-blue-950" style={{fontFamily:'Poppins'}}>WedTech</h2>
              </a>

              <div class="mt-4">
                <span class="inline-flex justify-center mt-2 sm:ml-auto sm:mt-0 sm:justify-start text-sm " style={{fontFamily:'Poppins'}}>
                  <p>
                    Book your trip in minute, get full Control for much longer.
                  </p>
                </span>
              </div>
            </div>
            <div class="flex flex-wrap flex-grow mt-10 -mb-10 text-center md:pl-20 md:mt-0 md:text-left">
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-extrabold tracking-widest text-blue-950 uppercase title-font" style={{fontFamily:"Poppins"}}>
                  Company
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-950 cursor-pointer hover:text-gray-500 text-base" style={{fontFamily:'Poppins'}}>
                      About
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-900 cursor-pointer hover:text-gray-500 text-base" style={{fontFamily:'Poppins'}}>
                      Careers
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-900 cursor-pointer hover:text-gray-500 text-base"style={{fontFamily:'Poppins'}}>
                      Mobile
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-extrabold text-blue-950 tracking-widest uppercase title-font" style={{fontFamily:"Poppins"}}>
                  Contact
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-900 cursor-pointer hover:text-gray-500 text-base" style={{fontFamily:"Poppins"}}>
                      Help/FAQ
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-900 cursor-pointer hover:text-gray-500 text-base" style={{fontFamily:"Poppins"}}>
                      Press
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class="text-gray-900 cursor-pointer hover:text-gray-500 text-base" style={{fontFamily:"Poppins"}}>
                      Affilates
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/4 md:w-1/2">
                <h2 class="mb-3 text-sm font-extrabold tracking-widest text-blue-950 uppercase title-font" style={{fontFamily:'Poppins'}}>
                  More
                </h2>
                <nav class="mb-10 list-none">
                  <li class="mt-3">
                    <a class="text-gray-900 cursor-pointer hover:text-gray-500 text-base"style={{fontFamily:"Poppins"}}>
                      Airlinefess
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class=" text-gray-900 cursor-pointer hover:text-gray-500 text-base" style={{fontFamily:"Poppins"}}>
                      Airline
                    </a>
                  </li>
                  <li class="mt-3">
                    <a class=" text-gray-900 cursor-pointer hover:text-gray-500 text-base"style={{fontFamily:"Poppins"}}>
                      Low fare tips
                    </a>
                  </li>
                </nav>
              </div>
              <div class="w-full px-4 lg:w-1/4 md:w-1/2 -mt-2">
                <h2 class="mb-3 text-sm font-black tracking-widest text-blue-950 uppercase title-font" style={{fontFamily:'Poppins'}}>
                  Discover our App
               </h2>
               <div className="flex items-center justify-center flex-col"> {/* Center content vertically and horizontally */}
                <a
                  href="https://link-to-your-play-store"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-500 cursor-pointer hover:text-gray-900"
                >
                  {/* Use the Play Store icon */}
                  <FaGooglePlay className="w-12 h-12" /> {/* Adjust size as needed */}
                </a>
                {/* You can add a label below the icon if needed */}
                <p className="mt-2" style={{fontFamily:"Poppins"}}>Download on Play Store</p>
              </div>
              </div>
            </div>
          </div>
          <div>
            <div class="container px-5 py-4 mx-auto">
              <p class="text-sm text-gray-700 capitalize xl:text-center" style={{fontFamily:"Poppins"}}>
                © 2022 All rights reserved{" "}
              </p>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};
