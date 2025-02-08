import { useState } from "react";
import Tabs from "../../Tabs";
import TruckGraphs from "./TruckGraphs";
import TruckTables from "./TruckTables";

const RealTimeResponsivnessElement = ({
  table,
  graph
}) => {
  const [toUpdateVal, _setToUpdateVal] = useState(null);
  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Visibility and Responsiveness in Real Time"
      headers={["graphs", "tables"]}
      content={[
        {
          header: "graphs",
          component: <TruckGraphs data={graph} />,
          key: "graphs",
        },
        {
          header: "tables",
          component: <TruckTables data={table} />,
          key: "tables",
        }
      ]}
      customContent={[]}
    />
)}

export default RealTimeResponsivnessElement;
