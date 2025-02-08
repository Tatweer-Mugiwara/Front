import React, { useEffect, useState } from "react";
import API from "../../../utils/api-client";
import { Check } from "lucide-react";
import { X } from "lucide-react";
import { toast } from "react-toastify";
import Map from "../../Map";

const OutputComponent = ({ handleTabChange, result, selectedCities }) => {
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {}, []);

  return (
    <div className="w-full">
      <p className="text-mainColor text-2xl font-semibold">
        Showing the shortest path on the map:
      </p>
      <div className="flex h-[70vh] w-full mt-5">
        <Map selectedCities={selectedCities} result={result} />
      </div>
    </div>
  );
};

export default OutputComponent;
