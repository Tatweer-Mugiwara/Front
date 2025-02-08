import { useState } from "react";
import ReactApexChart from 'react-apexcharts';

export default function TruckGraphs({
  data
}) {
    const [filter, setFilter] = useState("");
    const [dataF, _setDataF] = useState(data);

    const filterData = (filter) => {
      switch (filter) {
        case "temperature":
          _setDataF(data.filter(e => e.key === "temperature"));
          break;
        case "CO2":
          _setDataF(data.filter(e => e.key === "CO2"));
          break;
        default:
          break;
      }
    }
    return (
      <div className="w-full outline-none">
        <div className="overflow-x-auto mt-4 flex flex-col gap-10">
          <div className="flex items-center justify-between">
            <p className="text-mainColor text-2xl font-semibold capitalize">
              You can choose the graph settings from here:
            </p>
            <select className="px-16 py-3 font-unbounded font-bold transition-all bg-mainColor text-white text-center" onChange={(e) => {
              setFilter(e.target.value);
              filterData(e.target.value);
            }} value={filter}>
              <option value="temperature">Termal</option>
              <option value="CO2">CO2</option>
            </select>
          </div>
          <div className="flex justify-center flex-col gap-10 w-full mt-4 overflow-hidden">
            <ReactApexChart
                className="w-full"
                options={{
                  xaxis: {
                    categories: (dataF ?? [])?.map((e, i) => i),
                    colors: ['#4ecdc4', "#ed5565", "#43b1a9"],
                  },
                }}
                series={[{
                    name: 'Total',
                    data: (dataF ?? [])?.map((e) => parseInt(e.value)),
                }]}
                type="line"
                height={350}
            />
          </div>
        </div>
      </div>
    )
}
