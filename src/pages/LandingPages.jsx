import React, { useState } from "react";
import logo from "../images/WedTech.png";
import travel from "../images/Traveller.png";
import { FaBars } from "react-icons/fa";

export const LandingPages = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const textStyle = {
    fontFamily: "Poppins, sans-serif",
    fontWeight: "extrabold",
    fontSize: "2rem",
  };

  const singleLineText = {
    whiteSpace: "nowrap", // Add this CSS property
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="px-4 md:px-36 py-2 pt-8">
      <div className="flex items-center justify-between">
        <div style={{ fontFamily: "Poppins , sans-serif", fontSize: "20px", margin: "-10px 0" }}>
          <img src={logo} alt="" width={98} />
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            <FaBars size={24} />
            {menuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            )}
          </button>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-12" style={{ fontFamily: 'Open Sans', margin: "-10px 0" }}>
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
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M19.5 8.25l-7.5 7.5-7.5-7.5"
              />
            </svg>
          </div>
        </div>
      </div>
      {/* Mobile Menu Dropdown */}
      {menuOpen && (
        <div className="md:hidden">
          <div className="flex flex-col mt-4 space-y-2">
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
            <a href="#" className="border px-4 py-1.5 rounded-md border-black font-semibold">
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
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </div>
          </div>
        </div>
      )}

      <div className="pt-4 md:pt-24 flex flex-col md:flex-row items-center">
        <div className="w-full md:w-1/2">
          <div className="grid gap-4">
            <div className="grid gap-4 p-2">
              <div className="mb-4">
                <span className="font-bold text-2xl text-red-700" style={singleLineText}>
                  Best Destination around the world
                </span>
              </div>
              <div className="mb-4">
                <span className="font-bold text-4xl md:text-6xl text-blue-950" style={{ fontFamily: "Volkhov, serif" }}>
                  Travel, enjoy and live a new and full life
                </span>
              </div>
              <p className="text-gray-500 font-semibold text-base md:text-xl" style={{ fontFamily: "Poppins" }}>
                Built wicket longer admire do barton vanity itself go in it Preffered to sportsmen it engrossed listening. Park gate sell they west hard for the
              </p>
              <div className="flex justify-start">
                <button className="bg-yellow-500 hover:bg-black text-white font-semibold py-3 px-5 rounded-md" style={{ fontSize: "18px" }}>
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 text-center">
          <img src={travel} alt="" className="mx-auto" />
        </div>
      </div>
    </div>
  );
};
