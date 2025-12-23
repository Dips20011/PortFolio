import React from "react";
import mern from "../../public/mern.jpg";
import bearshop from "../../public/bearshop.jpg";

function PortFolio() {
  const cardItem = [
    {
      id: 1,
      logo: mern,
      name: "MERN Stack Book Store",
      frontend: "https://github.com/Dips20011/mern-stack-project",
      
      video: "/BookStore.mp4",
    },
    {
      id: 2,
      logo: bearshop,
      name: "Bearshop Inventory System",
      frontend: "https://github.com/Dips20011/beershop-inventory-scan.git",
      
      video: "/Screen Recording 2025-12-22 221540.mp4",
    },
  ];

  return (
    <div
      name="Portfolio"
      className="max-w-screen-2xl container mx-auto px-4 md:px-20 mt-10"
    >
      <h1 className="text-3xl font-bold mb-5">Portfolio</h1>
      <span className="underline font-semibold">Featured Projects</span>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-3 my-5">
        {cardItem.map(
          ({ id, logo, name, frontend, backend, video }) => (
            <div
              key={id}
              className="md:w-[300px] md:h-[330px] border-[2px] rounded-lg shadow-lg p-2 hover:scale-110 duration-300"
            >
              <img
                src={logo}
                className="w-[120px] h-[120px] mx-auto rounded-full border-[2px]"
                alt={name}
              />

              <div className="text-center font-bold text-xl my-2">
                {name}
              </div>

              <div className="flex flex-col gap-2 px-4">
                <a
                  href={video}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 rounded text-center"
                >
                  🎥 Project Video
                </a>

                <a
                  href={frontend}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 rounded text-center"
                >
                  💻 source Code
                </a>

               
              </div>
            </div>
          )
        )}
      </div>
    </div>
  );
}

export default PortFolio;
