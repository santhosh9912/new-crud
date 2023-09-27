import React from "react";
import logo from "../images/logos.jpg";
import travel from '../images/Traveller.png'

export const LandingPages = () => {
  return (
    <div className="px-44 py-6">
      <div className="flex item-center justify-between">
        <div>
          <img src={logo} alt="" width={50} />
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
        <div className="w-[450px] ">
          <div className="grid gap-4">
            <div className="grid gap-4">
              <span className="text-red-700 font-extrabold text-2xl">
                Best Destination around the world
              </span>
              <span className="font-bold text-6xl text-blue-950">
                Travel ,enjoy and live a new and full life
              </span>
              <p className="font-serif rgba(94, 98, 130, 1)">
                Built wicket longer admire do barton vanity itself go in it
                Preffered to sportsmen it engrossed listening.Park gate sell
                they west hard for the
              </p>


               <div className="flex justify-start">
                <button className="bg-yellow-500 hover:bg-black text-white font-bold py-1 px-2 rounded-md">
                  Find out more
                </button>
              </div>
            </div>
          </div>
        </div>
            <div className="absolute top-24 right-14">
                <img src={travel} alt=""/>
            </div>
      </div>
    </div>
  );
};
