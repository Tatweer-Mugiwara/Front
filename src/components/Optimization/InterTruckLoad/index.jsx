import React, { useState } from "react";
import InputComponent from "./InputComponent";
import OutputComponent from "./OutputComponent";
import TreatmentComponent from "./TreatmentComponent";
import Tabs from "../../Tabs";

const InterTruckLoadContent = () => {
  const [toUpdateVal, setToUpdateVal] = useState(null);

  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Inter-Truck load Optimization"
      headers={["input", "treatment", "output"]}
      content={[
        {
          header: "input",
          component: <InputComponent />,
          key: "input",
        },
        {
          header: "treatment",
          component: <TreatmentComponent />,
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
            <button
              onClick={() => {
                setToUpdateVal("treatment");
              }}
              className="mt-8 px-8 py-2 bg-mainColor text-white"
            >
              Start
            </button>
          ),
          key: 1
        },
        {
          header: "treatment",
          component: (
            <button
              onClick={() => {
                setToUpdateVal("output");
              }}
              className="mt-8 px-8 py-2 bg-mainColor text-white"
            >
              Finish
            </button>
          ),
          key: 2
        }
      ]}
    />
)}

export default InterTruckLoadContent;
