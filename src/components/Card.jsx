import React from "react";
import { CiAirportSign1, CiCloudDrizzle, CiMicrophoneOn, CiSun } from "react-icons/ci";

const CardList = () => {
  const cardsData = [
    {
      title: "Calculated weather",
      features: ["Build wicket longer admire to do barton vanity itself do it in  "],
    },
    {
      title: "BestFlight",
      features: ["Engrossed listening park gate sell they west hard for the"],
    },
    {
      title: "Local events",
      features: ["Barton vanity itself do in it preferred to men it engrossed listening"],
    },
    {
      title: "Customization",
      features: ["We delivered outsourced aviation service for military customers"],
    },
  ];

  // Map card titles to React icons
  const cardIcons = {
    "Calculated weather": <CiCloudDrizzle size={50} style={{ fill: 'blue' }} />,
    "BestFlight": <CiAirportSign1 size={40} style={{ fill: 'green' }} />,
    "Local events": <CiMicrophoneOn size={40} style={{ fill: 'red' }} />,
    "Customization": <CiSun size={40} style={{ fill: 'orange' }} />,
  };

  const containerStyle = {
    width: "100%",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "hidden",
    
  };

  const cardCommonStyle = {
    width: "210px",
    margin: "16px",
    boxShadow: "0 10px 14px rgba(0, 0, 0, 0.2)", // Add box shadow to all cards
    backgroundColor: "white", // Add background color to all cards
    borderRadius: "40px",
  };

  return (
    <div style={containerStyle} className="mx-auto max-w-screen-xl px-4 py-4 -top-28">
      <div className="w-full text-center   pb-8">
        <h1 className="font-bold text-gray-500 text-xl py-8" style={{fontFamily:'Open Sans'}}>CATEGORY</h1>
        <span className="font-bold  text-blue-950 text-6xl -pt-2 " style={{fontFamily: 'Volkhov'}}>
          We offer best prices
        </span>
      </div>
      {cardsData?.map((card, index) => {
        const { title, features } = card;
        const icon = cardIcons[title];
       
        return (
          <div key={index} >
            <div className="w-56 h-64  py-10  border rounded-lg overflow-hidden  mx-auto transition duration-300 transform hover:scale-105 hover:shadow-xl bg-white" style={cardCommonStyle}>
              <div className="h-1/2 flex justify-center items-center rounded-t-lg ">
                {icon}
              </div>
              <div className="h-1/2 p-4 rounded-b-md flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold mb-2 text-center text-blue-900" style={{fontFamily:"Open sans"}}>{title}</h3>
                <ul className="list-none p-0 text-center text-blue-900">
                  {features.map((feature, index) => (
                    <li key={index} style={{fontFamily:'Poppins'}}>{feature}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default CardList;
