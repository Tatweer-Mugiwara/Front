import { useState } from "react";
import TrucksList from "./TrucksList";
import Tabs from "../../Tabs";

const RoutingContent = () => {
  const [toUpdateVal, _setToUpdateVal] = useState("trucks");
  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Visibility and Responsiveness in Real Time"
      headers={["trucks"]}
      content={[
        {
          header: "Trucks",
          component: <TrucksList />,
          key: "trucks",
        }
      ]}
      customContent={[]}
    />
)}

export default RoutingContent;
