import React, { useEffect, useState, useCallback } from "react";
import Loading from "../../Loading";
import { toast } from "react-toastify";
import API from "../../../utils/api-client";
import RouteDisplay from "./RouteDisplay";

const TreatmentComponent = ({
  handleTabChange,
  selectedCities,
  selectedSize,
  result, 
  setResult, 
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const [durationMatrix, setDurationMatrix] = useState(null);

  const calculateDurationMatrix = useCallback(async (cities) => {
    const service = new window.google.maps.DistanceMatrixService();
    const matrix = [];

    try {
      for (let i = 0; i < cities.length; i++) {
        const row = [];
        for (let j = 0; j < cities.length; j++) {
          if (i === j) {
            row.push(0);
          } else if (i < j) {
            const result = await service.getDistanceMatrix({
              origins: [cities[i]],
              destinations: [cities[j]],
              travelMode: window.google.maps.TravelMode.DRIVING,
            });

            const duration = result.rows[0].elements[0].duration.value / 60; // Convert to minutes
            row.push(duration);
          } else {
            row.push(matrix[j][i]);
          }
        }
        matrix.push(row);
      }

      setDurationMatrix(matrix);
      return matrix;
    } catch (error) {
      toast.error("Error calculating travel times", {
        position: "top-center",
        autoClose: 5000,
      });
      return null;
    }
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const matrix = await calculateDurationMatrix(selectedCities);
        const data = {
          cities: selectedCities,
          matrix: matrix,
          size: selectedSize.value,
        };
        const response = await API.post("pvc/", {
          ...data,
        });
        setResult(response.data.tsp_path);
        //here set result
      } catch (error) {
        setError(true);
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

    // const timer = setTimeout(() => {
    //   setIsLoading(false);
    //   // handleTabChange("output");
    // }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mt-4">
      <div className="flex justify-center">
        <div className="h-[50vh] flex items-center justify-center">
          {isLoading ? (
            <div className="flex flex-col items-center gap-4">
              <p className="text-mainColor text-2xl font-semibold">
                Calculating the shortest path using the collected data:
              </p>

              <div className="animate-pulse">
                <img
                  src="/images/Routing/loading_image.webp"
                  alt="Loading"
                  className="transition-opacity animate-pulse"
                />
              </div>
            </div>
          ) : error ? (
            <div>
              <p className="text-3xl">Error</p>
            </div>
          ) : (
            <div>
          <p className="text-mainColor text-2xl font-semibold">
            See the final result of the problem resolution:
          </p>
          <RouteDisplay result={result} selectedCities={selectedCities} />
          <button
            onClick={() => {
              handleTabChange("input");
            }}
            className="px-16 py-3 bg-mainColor text-white w-fit font-unbounded font-bold"
          >
            Finish
          </button>
        </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default TreatmentComponent;
