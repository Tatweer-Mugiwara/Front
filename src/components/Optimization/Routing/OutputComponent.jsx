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
        Showing the shortest path on the map:
      </p>
      <div className="flex h-[70vh] w-full mt-5">
        <Map />
      </div>
    </div>
  );
};

export default OutputComponent;
