import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../../../components/Layout";
import PlanificationCoordinationContent from "../../../../components/Optimization/PlanificationCoordination";
import API from "../../../../utils/api-client";

const PlanificationCoordination = () => {
  const [alertsData, setAlertsData] = useState([]);
  const [isAlertsLoading, setIsAlertsLoading] = useState(false);

  const [rulesData, setRulesData] = useState([]);
  const [isRulesLoading, setIsRulesLoading] = useState(false);

  useEffect(() => {
    const getAlerts = async () => {
      try {
        setIsAlertsLoading(true);
        const response = await API.get(`alerts/`);
        if (!response.data) {
          toast.error("No alerts found", {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          return;
        }
        setAlertsData(response.data);
      } catch (error) {
        toast.error(error?.response?.message ?? "Error", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } finally {
        setIsAlertsLoading(false);
      }
    }

    const getRules = async () => {
      try {
        setIsRulesLoading(true);
        const response = await API.get(`captions/${tid}/`);
        if (!response.data) {
          toast.error("No captions for this truck", {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          return;
        }
        setRulesData(response.data);
      } catch (error) {
        toast.error(error?.response?.message ?? "Error", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } finally {
        setIsRulesLoading(false);
      }
    }

    Promise.all([getAlerts(), getRules()]);
  }, []);


  return (
    <Layout isLoading={isRulesLoading || isAlertsLoading}>
      <PlanificationCoordinationContent alerts={alertsData} rules={rulesData} />
    </Layout>
  );
};

export default PlanificationCoordination;
