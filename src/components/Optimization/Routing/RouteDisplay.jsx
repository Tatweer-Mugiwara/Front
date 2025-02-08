import React from 'react';
import { ArrowRight } from 'lucide-react';

const RouteDisplay = ({ result, selectedCities }) => {
  const routeIndices = result;
  
  return (
    <div className="w-full py-8">
      <div className="flex flex-wrap items-center justify-center gap-4">
        {routeIndices.map((cityIndex, index) => (
          <React.Fragment key={cityIndex}>
            <div className="bg-white shadow-lg rounded-lg border border-gray-200">
              <div className="px-6 py-4">
                <h3 className="text-lg font-semibold text-gray-800">
                  {selectedCities[cityIndex]}
                </h3>
              </div>
            </div>
            
            {index < routeIndices.length - 1 && (
              <ArrowRight 
                className="text-blue-600 h-8 w-8"
                strokeWidth={2.5}
              />
            )}
          </React.Fragment>
        ))}
      </div>
      
      <div className="mt-8 text-center">
        <p className="text-gray-600">
          Total Cities: {routeIndices.length}
        </p>
      </div>
    </div>
  );
};

export default RouteDisplay;