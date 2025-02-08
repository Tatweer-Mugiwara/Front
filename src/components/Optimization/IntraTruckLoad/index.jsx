import { useState } from "react";
// import OutputComponent from "./OutputComponent";
import TraitmentComponent from "./TraitmentComponent";
import InputComponent from "./InputComponent";
import Tabs from "../../Tabs";

const IntraTruckLoadContent = () => {
  const [toUpdateVal, setToUpdateVal] = useState(null);
  const [data, setData] = useState([{
    item: "",
    length: 0,
    width: 0,
    height: 0,
    weight: 0,
    quantity: 0,
    stackable: false,
  }]);

  const [truckData, setTruckData] = useState({
    item: "",
    length: 0,
    width: 0,
    height: 0,
    maxWeight: 0,
  })

  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Intra-Truck Load Optimization"
      headers={["input", "treatment", "output"]}
      content={[
        {
          header: "input",
          component: <InputComponent
            data={data}
            setData={setData}
            truckData={truckData}
            setTruckData={setTruckData}
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
          component: <div></div>,
          key: "output",
        },
      ]}
      customContent={[
        {
          header: "input",
          component: (
            <div className="flex w-full flex-col gap-6 mt-16">
              <p className="text-mainColor text-2xl font-semibold">
                See the simulation of the problem resolution :
              </p>
              <button
                onClick={() => {
                  setToUpdateVal("treatment");
                }}
                className="px-16 py-3 bg-mainColor w-fit text-white font-unbounded font-bold"
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
              <div className="flex w-full flex-col gap-6">
                <p className="text-mainColor text-2xl font-semibold">
                  See the final result of the problem solution
                </p>
                <button
                onClick={() => {
                  setToUpdateVal("output");
                }}
                className="px-16 py-3 bg-mainColor w-fit text-white font-unbounded font-bold"
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
              className="px-16 py-3 bg-mainColor w-fit text-white font-unbounded font-bold"
            >
              RESTART
            </button>
          ),
          key: 3
        }
      ]}
    />
)}

export default IntraTruckLoadContent;
