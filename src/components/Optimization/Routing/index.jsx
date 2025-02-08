import React, { useState } from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import TraitmentComponent from "./TraitmentComponent";
import Tabs from "../../Tabs";

const RoutingContent = () => {
  const [toUpdateVal, setToUpdateVal] = useState(null);
  const [data, setData] = useState([
    {
      name: 'Small size',
      value: 200
    }
  ]);

  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Route Optimization"
      headers={["input", "treatment", "output"]}
      content={[
        {
          header: "input",
          component: <InputComponent
            data={data}
            setData={setData}
          />,
          key: "input",
        },
        {
          header: "treatment",
          component: <TraitmentComponent />,
          key: "treatment",
        },
        {
          header: "output",
          component: <OutputComponent />,
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
                onClick={() => {
                  setToUpdateVal("treatment");
                }}
                className="px-16 py-3 bg-mainColor text-white w-fit font-unbounded font-bold"
              >
                Start
              </button>
            </div>
          ),
          key: 1
        },
        {
          header: "treatment",
          component: (
            <div className="flex w-full flex-col gap-5 mt-16">
              <p className="text-mainColor text-2xl font-semibold">
                See the final result of the problem resolution:
              </p>
              <button
                onClick={() => {
                  setToUpdateVal("output");
                }}
                className="px-16 py-3 bg-mainColor text-white w-fit font-unbounded font-bold"
              >
                Finish
              </button>
            </div>
          ),
          key: 2
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
              Restrat
            </button>
          ),
          key: 3
        }
      ]}
    />
)}

export default RoutingContent;
