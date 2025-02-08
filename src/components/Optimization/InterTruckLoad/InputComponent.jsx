import { useEffect, useState } from "react";
import API from "../../../utils/api-client";
import Map from "../../Map";

const InputComponent = () => {
  //   const [data, setData] = useState([]);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

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
        <Map />
      </div>
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
            {data.map((row, index) => (
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
    </div>
  );
};

export default InputComponent;
