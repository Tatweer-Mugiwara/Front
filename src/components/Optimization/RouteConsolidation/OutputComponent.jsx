import React, { useEffect, useState } from "react";
import API from "../../../utils/api-client";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import { toast } from "react-toastify";


const OutputComponent = ({ handleTabChange }) => {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async () => {
    try {
      await API.post("optimization/confirm/", {
        optimizedOrders: suggestions,
      });

      toast.success("Done!", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });

      handleTabChange("input");
    } catch (error) {
      toast.error(error?.response?.message ?? "Error", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await API.post("optimization/suggest/");
        setData(response.data);
        setSuggestions(response.data.optimizedOrders);
      } catch (error) {
        toast.error(error?.response?.message ?? "Error", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } finally {
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="">
      <p className="text-mainColor text-xl font-semibold">
        SHOWING the final planified deliveries with their informations :
      </p>
      <img src="/images/Optimization/image.png" className="mt-4" alt="" />
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border">
          <thead className="bg-mainColor text-white">
            <tr className="">
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">In road</th>
              <th className="px-4 py-2">Destination</th>
              <th className="px-4 py-2">Depart Time</th>
              <th className="px-4 py-2">Max Weight</th>
              <th className="px-4 py-2">Current Weight</th>
            </tr>
          </thead>
          <tbody>
            {suggestions.map((row, index) => (
              <tr key={index}>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.client}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.departure}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.intermediateDestinations.length > 0
                    ? row.intermediateDestinations[0]
                    : "/"}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.destination}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.departureTime}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.truckMaxWeight} Tonnes
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.weight} Tonnes
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-mainColor text-xl font-semibold mt-8">
          IF this plan arrange you , would you like the database To be updated ?
        </p>
      </div>
      <div className="flex flex-row space-x-4 mt-4">
        <button
          className="py-2 px-4 bg-mainColor text-white  flex items-center"
          onClick={handleSubmit}
        >
          <Check size={20} />
        </button>
        <button
          onClick={() => {
            handleTabChange("input");
          }}
          className="py-2 px-4 border border-mainColor text-mainColor  flex items-center"
        >
          <X size={20} />
        </button>
      </div>
    </div>
  );
};

export default OutputComponent;
