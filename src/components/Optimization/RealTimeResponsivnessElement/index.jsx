import { useState } from "react";
import Tabs from "../../Tabs";
import TruckGraphs from "./TruckGraphs";
import TruckTables from "./TruckTables";

const RealTimeResponsivnessElement = () => {
  const [toUpdateVal, _setToUpdateVal] = useState(null);
  const [data, setData] = useState([]);
  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Visibility and Responsiveness in Real Time"
      headers={["graphs", "tables"]}
      content={[
        {
          header: "graphs",
          component: <TruckGraphs data={[]} />,
          key: "graphs",
        },
        {
          header: "tables",
          component: <TruckTables data={[]} />,
          key: "tables",
        }
      ]}
      customContent={[]}
    />
)}

export default RealTimeResponsivnessElement;
