import React, { useEffect, useState } from "react";
import API from "../../../utils/api-client";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import Map from "../../Map";

const OutputComponent = ({ handleTabChange }) => {
  const [data, setData] = useState([]);
  const [suggestions, setSuggestions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [combinedOrder, setCombinedOrder] = useState(null);

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
        if (!response.data.optimizedOrders) {
          toast.error("No optimized orders found", {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          return;
        }
        setData(response.data);
        setSuggestions(response.data.optimizedOrders);
        if (response.data.optimizedOrders) {
          let order = {};
          order.departure = response.data.optimizedOrders[0].departure;
          order.destination =
            response.data.optimizedOrders[
              response.data.optimizedOrders.length - 1
            ].destination;
          order.intermediateDestinations = [];
          for (let i = 0; i < response.data.optimizedOrders.length - 1; i++) {
            order.intermediateDestinations[i] =
              response.data.optimizedOrders[i].destination;
          }
          setCombinedOrder(order);
        }
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
    <div className="w-full">
      <p className="text-mainColor text-2xl font-semibold">
        Showing the final planified deliveries with their informations:
      </p>
      <div className="flex h-[70vh] w-full mt-5">
        <Map hoveredOrder={combinedOrder} />
      </div>
      <div className="overflow-x-auto overflow-y-auto mt-8">
        <table className="min-w-full bg-white border">
          <thead className="bg-mainColor text-white">
            <tr className="">
              <th className="px-4 py-2">Client</th>
              <th className="px-4 py-2">Source</th>
              <th className="px-4 py-2">In Road</th>
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
                  {new Date(row.departureTime).toLocaleString("fr-FR", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </td>{" "}
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
      </div>
      <p className="text-mainColor text-2xl font-semibold mt-4">
        If this plan arrange you, would you like the database to be updated?
      </p>
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
