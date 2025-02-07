import React, { useState } from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import TreatmentComponent from "./TreatmentComponent";
const RouteConsolidationContent = () => {
  const [selectedTab, setSelectedTab] = useState("input");

  const handleTabChange = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="w-[80%] flex flex-row justify-between items-center">
        <h1 className="text-3xl font-bold text-mainColor">
          Inter-Truck load Optimization :
        </h1>
        <button className="px-8 py-2 bg-mainColor text-white">Back</button>
      </div>

      <div className="w-[80%] flex flex-row space-x-4 ml-16 mt-8">
        <button
          className={`px-8 py-2 ${
            selectedTab === "input"
              ? "bg-mainColor text-white"
              : "bg-transparent border border-mainColor text-gray-700"
          }`}
          onClick={() => handleTabChange("input")}
        >
          Input
        </button>
        <button
          className={`px-8 py-2 ${
            selectedTab === "treatment"
              ? "bg-mainColor text-white"
              : "bg-transparent border border-mainColor text-gray-700"
          }`}
          onClick={() => handleTabChange("treatment")}
        >
          Treatment
        </button>
        <button
          className={`px-8 py-2 ${
            selectedTab === "output"
              ? "bg-mainColor text-white"
              : "bg-transparent border border-mainColor text-gray-700"
          }`}
          onClick={() => handleTabChange("output")}
        >
          Output
        </button>
      </div>

      <div
        className={`w-[80%] mb-4 px-8 py-4 flex flex-col items-center  border border-mainColor mt-8 transition-all duration-300`}
      >
        {selectedTab === "input" && <InputComponent />}
        {selectedTab === "treatment" && <TreatmentComponent />}
        {selectedTab === "output" && <OutputComponent />}
        {selectedTab === "input" && (
          <button
            onClick={()=>{
            handleTabChange("treatment")
            }}
            className="mt-8 px-8 py-2 bg-mainColor text-white"
          >
            Start
          </button>
        )}
        {selectedTab === "treatment" && (
          <button
            onClick={()=>{
            handleTabChange("output")
            }}
            className="mt-8 px-8 py-2 bg-mainColor text-white"
          >
            Finish
          </button>
        )}
      </div>
    </div>
  );
};

export default RouteConsolidationContent;
