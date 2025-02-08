import { useEffect, useState } from "react";
import API from "../../../utils/api-client";
import Map from "../../Map";

const InputComponent = ({
  data,
  setData
}) => {
  const [_isLoading, setIsLoading] = useState(false);
  const [hoveredOrder, setHoveredOrder] = useState(null); 

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await API.get("orders/");
        setData(response.data);
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
      <div className="flex h-[70vh] w-full">
        <Map hoveredOrder={hoveredOrder} />
      </div>
      <div className="overflow-x-auto mt-4">
        <table className="min-w-full bg-white border border-mainColor">
          <thead className="bg-mainColor text-white">
            <tr>
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
            {data.map((row, index) => (
              <tr
                key={index}
                className={`cursor-pointer transition-colors duration-300 hover:bg-gray-300 ${row.client =="Combined Order" ? "bg-green-500" :""} `}
                onMouseEnter={() => setHoveredOrder(row)}
                onMouseLeave={() => setHoveredOrder(null)} 

              >
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.client}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.departure}
                </td>
                <td className="border border-mainColor px-4 py-2 text-mainColor">
                  {row.intermediateDestinations.length > 0
                    ? row.intermediateDestinations.join(" → ")
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
        {
          data.length === 0 && !_isLoading && (
            <div className="text-center text-mainColor mt-4 pt-5 border-2 relative -top-4 border-mainColor border-t-transparent pb-5">No data</div>
          )
        }
      </div>
    </div>
  );
};

export default InputComponent;
