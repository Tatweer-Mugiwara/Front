import React, { useState, useCallback } from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import TraitmentComponent from "./TraitmentComponent";
import Tabs from "../../Tabs";
import { toast } from "react-toastify";

const RoutingContent = () => {
  const [toUpdateVal, setToUpdateVal] = useState(null);
  const [selectedSize, setSelectedSize] = useState({
    name: "Without size",
    value: 0,
  });
  const [data, setData] = useState([
    {
      name: "Without size",
      value: 0,
    },
    {
      name: "Small size",
      value: 200,
    },
    {
      name: "Medium size",
      value: 2000,
    },
    {
      name: "Large size",
      value: 20000,
    },
  ]);
  const [selectedCities, setSelectedCities] = useState([]);
  const [result, setResult] = useState(null);

  const handleStart = async () => {
    if (selectedCities.length === 0) {
      return toast.error("Choose cities", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }

    setToUpdateVal("treatment");
  };

  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Route Optimization"
      headers={["input", "treatment", "output"]}
      content={[
        {
          header: "input",
          component: (
            <InputComponent
              data={data}
              setData={setData}
              onCitiesChange={setSelectedCities}
              selectedSize={selectedSize}
              setSelectedSize={setSelectedSize}
            />
          ),
          key: "input",
        },
        {
          header: "treatment",
          component: (
            <TraitmentComponent
              handleTabChange={setToUpdateVal}
              selectedCities={selectedCities}
              selectedSize={selectedSize}
              calculateDurationMatrix
              result={result}
              setResult={setResult}
            />
          ),
          key: "treatment",
        },
        {
          header: "output",
          component: (
            <OutputComponent
              handleTabChange={setToUpdateVal}
              result={result}
              selectedCities={selectedCities}
            />
          ),
          key: "output",
        },
      ]}
      customContent={[
        {
          header: "input",
          component: (
            <div className="flex w-full flex-col gap-5 mt-16">
              <p className="text-mainColor text-2xl font-semibold">
                See the simulation of the problem resolution:
              </p>
              <button
                onClick={handleStart}
                className="px-16 py-3 bg-mainColor text-white w-fit font-unbounded font-bold"
              >
                Start
              </button>
            </div>
          ),
          key: 1,
        },
        {
          header: "treatment",
          key: 2,
        },
        {
          header: "output",
          component: (
            <button
              onClick={() => {
                setToUpdateVal("input");
              }}
              className="px-16 py-3 bg-mainColor text-white w-fit font-unbounded font-bold mt-10 flex self-start"
            >
              Restart
            </button>
          ),
          key: 3,
        },
      ]}
    />
  );
};

export default RoutingContent;
