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
    width: "1000px",
    display: "flex",
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "center",
    margin: "0 auto",
    overflow: "hidden",
  };

  return (
    <div style={containerStyle}>
      <div className="w-full text-center text-blue-900 font-bold pb-6">
        <h1>CATEGORY</h1>
        <span className="font-medium text-6xl text-blue-950">
          We offer best prices
        </span>
      </div>
      {cardsData?.map((card, index) => {
        const { title, features } = card;
        const icon = cardIcons[title];
       
        const cardStyle = {
          width: "205px",
          margin: "16px",
          border: index === 1 ? "2px solid  white" : "none", // Add a border to the second card
          boxShadow: index === 1 ? "0 4px 6px rgba(0, 0, 0, 0.1)" : "none", // Add a shadow to the second card
          backgroundColor: index === 1 ? "white" : "transparent", // Set a white background for the second card
          borderRadius: "40px",
        };

        return (
          <div key={index}>
            <div className="w-56 h-64 border rounded-lg overflow-hidden shadow-md mx-auto transition duration-300 transform hover:scale-105 hover:shadow-xl bg-white" style={cardStyle}>
              <div className="h-1/2 flex justify-center items-center rounded-t-lg">
                {icon}
              </div>
              <div className="h-1/2 p-4 rounded-b-md flex flex-col justify-center items-center">
                <h3 className="text-xl font-semibold mb-2 text-center text-blue-900">{title}</h3>
                <ul className="list-none p-0 text-center text-blue-900">
                  {features.map((feature, index) => (
                    <li key={index}>{feature}</li>
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
