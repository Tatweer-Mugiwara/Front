import { useState } from "react";
import TrucksList from "./TrucksList";
import Tabs from "../../Tabs";

const RealTimeResponsivness = ({
  trucks
}) => {
  const [toUpdateVal, _setToUpdateVal] = useState(null);
  const [data, setData] = useState(trucks);
  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Visibility and Responsiveness in Real Time"
      headers={["trucks"]}
      content={[
        {
          header: "trucks",
          component: <TrucksList
            data={data}
            setData={setData}
            trucks={trucks}
          />,
          key: "trucks",
        }
      ]}
      customContent={[]}
    />
)}

export default RealTimeResponsivness;
