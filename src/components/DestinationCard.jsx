import React from "react";
import { IoIosSend } from "react-icons/io";
import Rome from '../images/Rome.jpg'
import London from '../images/London.jpg'
import Europe from '../images/Europe.jpg'

const cardsDestinationData = [
  {
    imageUrl: Rome,
    country: '  Rome',
    dollars: 1000,
    days: 10
  },
  {
    imageUrl: London,
    country: 'London',
    dollars: 2000,
    days: 12,
  },
  {
    imageUrl: Europe,
    country: 'Europe',
    dollars: 3000,
    days: 15,
  },
];

export const DestinationCard = () => {
  return (
    <div className="container mx-auto px-2 py-5 flex justify-center" style={{ width: "100%" }}>
      <div className="grid grid-cols-3 gap-6 pt-20 max-w-screen-xl px-10 w-[85%]">
        <div className="col-span-3 text-center  mb-8 ">
          <h1 style={{fontFamily:'Poppins',} } className="font-semibold  text-gray-500 text-xl py-5">Top Sellings</h1>
          <span className="font-bold text-5xl text-blue-950 " style={{fontFamily:'Volkhov'}}>Top Destinations</span>
        </div>
        {cardsDestinationData.map((card, index) => (
          <div key={index} className="col-span-1 flex justify-center ">
            <div className="rounded-2xl shadow-lg w-80 h-96 mx-2 p-4 transform transition-transform hover:scale-105 overflow-hidden">
              <div className="w-full h-64 overflow-hidden">
                <img
                  src={card.imageUrl}
                  alt={`Image of ${card.country}`}
                  className="w-full h-full object-cover text-base font-semibold"
                  style={{fontFamily:'Poppins' }}
                />
              </div>
              <div className="p-3 flex flex-col justify-between h-full">
                <div className="text-gray-500">
                  <div className="flex items-center justify-between">
                    <h2 className="text-xl font-semibold mb-2">{card.country}</h2>
                    <span className="text-gray-600 text-lg">$ {card.dollars}</span>
                  </div>
                  <div className="mt-2 flex items-center">
                    <IoIosSend className="w-6 h-6 mr-2 text-black"  />
                    <span className=" font-semibold rgba(94, 98, 130, 1); text-xl" style={{fontFamily:'Poppins'}} >{card.days} days travel</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
