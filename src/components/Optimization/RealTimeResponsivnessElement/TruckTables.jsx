import { useState } from "react";

export default function TruckTables({
  data,
  setData
}) {
  const [filter, setFilter] = useState("");
  return (
    <div className="w-full outline-none">
      <div className="overflow-x-auto mt-4 flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <p className="text-mainColor text-2xl font-semibold capitalize">
            You can choose the tables settings from here:
          </p>
          <select className="px-16 py-3 font-unbounded font-bold transition-all bg-mainColor text-white text-center" value={filter} onChange={(e) => {
            setFilter(e.target.value);
            setData(data.filter(truck => truck.status === e.target.value));
          }}>
            <option value="CO2">Sensors</option>
            <option value="Heat">Heat</option>
            <option value="Termal">Termal</option>
            <option value="Tires">Tires</option>
            <option value="O2">O2</option>
          </select>
        </div>
        <div className="flex justify-center flex-col gap-10 w-ful mt-4 overflow-x-hidden">
          <table className="min-w-full bg-white border border-mainColor">
            <thead className="bg-mainColor text-white">
              <tr>
                <th className="px-4 py-2">Date</th>
                <th className="px-4 py-2">Condition</th>
                <th className="px-4 py-2">Sensor</th>
                <th className="px-4 py-2">Explication</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index}>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    {row?.date}
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    {row?.condition}
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    {row?.sensor}
                  </td>
                  <td className="border border-mainColor px-4 py-2 text-mainColor">
                    {row?.description}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {
            data.length === 0 && (
              <div className="text-center text-mainColor mt-4 pt-5 border-2 relative -top-14 border-mainColor border-t-transparent pb-5">No data</div>
            )
          }
        </div>
      </div>
    </div>
  )
}
