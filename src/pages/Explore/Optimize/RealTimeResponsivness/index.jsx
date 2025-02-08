import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import Layout from "../../../../components/Layout";
import RealTimeResponsivnessContent from "../../../../components/Optimization/RealTimeResponsivness";
import API from "../../../../utils/api-client";
import { useLoadScript } from "@react-google-maps/api";
import { libraries } from "../../../../../constants";

const RealTimeResponsivness = () => {

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  })

  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        const response = await API.get("trucks/");
        if (!response.data) {
          toast.error("No trucks found", {
            position: "top-center",
            autoClose: 5000,
            pauseOnHover: true,
            draggable: true,
            theme: "light",
          });
          return;
        }
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
    <Layout isLoading={isLoading || !isLoaded}>
      <RealTimeResponsivnessContent trucks={data} />
    </Layout>
  );
};

export default RealTimeResponsivness;
