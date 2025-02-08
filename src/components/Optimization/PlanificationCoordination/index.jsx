import { useState } from "react";
import Tabs from "../../Tabs";

const PlanificationCoordinationContent = ({
  alerts,
  rules
}) => {
  const [toUpdateVal, _setToUpdateVal] = useState(null);
  return (
    <Tabs
      tabValue={toUpdateVal}
      title="Visibility and Responsiveness in Real Time"
      headers={["alerts", "history"]}
      content={[
        {
          header: "alerts",
          component: <></>,
          key: "alerts",
        },
        {
          header: "history",
          component: <></>,
          key: "history",
        },
      ]}
      customContent={[]}
    />
)}

export default PlanificationCoordinationContent;
