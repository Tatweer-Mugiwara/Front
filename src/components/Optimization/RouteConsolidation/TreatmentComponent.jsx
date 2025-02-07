import React, { useEffect, useState } from "react";

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
      <p className="text-mainColor text-xl font-semibold">
        PLEASE WAIT while Data is processed :
      </p>
      <div className="flex justify-center">
        {isLoading ? (
          <img
            src="/images/Optimization/loader.png"
            alt="Loading..."
            className="loading-spinner" 
          />
        ) : (
          <p>Chargement terminé!</p>
        )}
      </div>
      <p className="text-mainColor text-xl font-semibold">
        See the FINAL RESULT of the problem solution :
      </p>
    </div>
  );
};

export default TreatmentComponent;
