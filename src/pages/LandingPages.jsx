import React from "react";
import logo from "../images/WedTech.png";
import travel from "../images/Traveller.png";

export const LandingPages = () => {
  const textStyle = {
    fontFamily: "Poppins, sans-serif", // Use the font-family name "Poppins"
    fontWeight: "extrabold", // Apply font weight if needed
    fontSize: "2rem", // Customize font size as desired
  };

  return (
    <div className="px-44 py-6">
      <div className="flex items-center justify-between">
        <div style={{ fontFamily: "Poppins , sans-serif", fontSize: "20px" }}>
          <img src={logo} alt="" width={100} />
        </div>

        <div className="flex items-center space-x-12">
          <a href="#" className="font-semibold">
            Destination
          </a>
          <a href="#" className="font-semibold">
            Hotels
          </a>
          <a href="#" className="font-semibold">
            Flights
          </a>
          <a href="#" className="font-semibold">
            Bookings
          </a>
          <a href="#" className="font-semibold">
            Logins
          </a>
          <a
            href="#"
            className="border px-4 py-1.5 rounded-md border-black font-semibold"
          >
            Sign up
          </a>
          <div className="flex items-center">
            <a href="#" className="font-semibold">
              EN
            </a>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-6 h-6"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      <div className="pt-48 flex items-center">
        <div className="w-[600px] ">
          <div className="grid gap-4">
            <div className="grid gap-4 p-2">
              <div className="mb-4">
                <span
                  className="font-bold text-xl text-red-700"
                  style={textStyle}
                >
                  Best Destination around the world
                </span>
              </div>
              <div className="mb-4" >
                <span
                  className="font-bold text-6xl text-blue-950"
                  style={{ fontFamily: "Volkhov, serif" }}
                >
                  Travel, enjoy and live a new and full life
                </span>
              </div>
              <p
                className="text-gray-500 font-semibold text-xl"
                style={{ fontFamily: "Poppins" }}
              >
                Built wicket longer admire do barton vanity itself go in it
                Preffered to sportsmen it engrossed listening.Park gate sell
                they west hard for the
              </p>

              <div className="flex justify-start">
                <button
                  className="bg-yellow-500 hover:bg-black text-white font-semibold py-3 px-5 rounded-md"
                  style={{ fontSize: "18px" }}
                >
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-24 right-2">
          <img src={travel} alt="" />
        </div>
      </div>
    </div>
  );
};
