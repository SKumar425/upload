import React from "react";
import RadarChart from "./RadarChart";

const AIgenerated = () => {
  return (
    <div className="flex flex-col w-auto h-100vh justify-center items-center bg-blue-700">
      <div className="w-1/2 font-bold ">
        <p className="text-white text-3xl text-center">
          Instantly Improve Your Song's Quality with the support of NYX expert
          consultation service
        </p>
      </div>
      <div>
        
      </div>
      <div className=" flex">
        <div>
          <RadarChart />
        </div>
      </div>
    </div>
  );
};

export default AIgenerated;
