import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Layout from "../../../../components/Layout";
import API from "../../../../utils/api-client";
import RealTimeResponsivnessElementContent from "../../../../components/Optimization/RealTimeResponsivnessElement";

const RealTimeResponsivnessElement = () => {
  const { tid } = useParams();
    
  const [tablesData, setTablesData] = useState([]);
  const [isTableLoading, setIsTableLoading] = useState(false);

  const [graphsData, setGraphsData] = useState([]);
  const [isGraphLoading, setIsGraphLoading] = useState(false);

  useEffect(() => {
    const getTableInfo = async () => {
      try {
        setIsTableLoading(true);
        const response = await API.get(`reports/truck/${tid}/`);
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
        setTablesData(response.data);
      } catch (error) {
        toast.error(error?.response?.message ?? "Error", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } finally {
        setIsTableLoading(false);
      }
    }

    const getGraphInfo = async () => {
      try {
        setIsGraphLoading(true);
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
        setGraphsData(response.data);
      } catch (error) {
        toast.error(error?.response?.message ?? "Error", {
          position: "top-center",
          autoClose: 5000,
          pauseOnHover: true,
          draggable: true,
          theme: "light",
        });
      } finally {
        setIsGraphLoading(false);
      }
    }

    Promise.all([getTableInfo(), getGraphInfo()]);
  }, []);

  return (
    <Layout isLoading={isTableLoading || isGraphLoading}>
      <RealTimeResponsivnessElementContent
        table={tablesData}
        graph={graphsData}
      />
    </Layout>
  );
};

export default RealTimeResponsivnessElement;
