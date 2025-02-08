import React, { useEffect, useState } from "react";
import Loading from "../../Loading";

const TreatmentComponent = ({ handleTabChange }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      handleTabChange("output");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="w-full mt-4">
      <p className="text-mainColor text-2xl font-semibold">
        Calculating the shortest path using the collected data:
      </p>
      <div className="flex justify-center">
        <div className="h-[50vh] flex items-center justify-center">
          {isLoading ? (
            <Loading />
          ) : (
            <p className="text-3xl">Chargement terminé!</p>
          )}
        </div>
      </div>
      <p className="text-mainColor text-2xl font-semibold">
        See the final result of the problem resolution:
      </p>
    </div>
  );
};

export default TreatmentComponent;
