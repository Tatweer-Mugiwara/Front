import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useParams } from "react-router-dom";
import Layout from "../../../../components/Layout";
import API from "../../../../utils/api-client";
import RealTimeResponsivnessElementContent from "../../../../components/Optimization/RealTimeResponsivnessElement";

const RealTimeResponsivnessElement = () => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const { tid } = useParams();

  // useEffect(() => {
  //   const fetchData = async () => {
  //     try {
  //       setIsLoading(true);
  //       const response = await API.get("trucks/"+tid);
  //       if (!response.data) {
  //         toast.error("No truck found with this id", {
  //           position: "top-center",
  //           autoClose: 5000,
  //           pauseOnHover: true,
  //           draggable: true,
  //           theme: "light",
  //         });
  //         return;
  //       }
  //       setData(response.data);
  //     } catch (error) {
  //       toast.error(error?.response?.message ?? "Error", {
  //         position: "top-center",
  //         autoClose: 5000,
  //         pauseOnHover: true,
  //         draggable: true,
  //         theme: "light",
  //       });
  //     } finally {
  //       setIsLoading(false);
  //     }
  //   };

  //   fetchData();
  // }, []);

  return (
    <Layout isLoading={isLoading}>
      <RealTimeResponsivnessElementContent />
    </Layout>
  );
};

export default RealTimeResponsivnessElement;
