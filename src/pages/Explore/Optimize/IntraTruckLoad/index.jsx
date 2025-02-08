import { useLoadScript } from "@react-google-maps/api";
import Layout from "../../../../components/Layout";
// import IntraTruckLoadContent from "../../../../components/Optimization/IntraTruckLoad";
import { libraries } from "../../../../../constants";

const IntraTruckLoad = () => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
      libraries: libraries,
    })

  return (
    <Layout isLoading={!isLoaded}>
      {/* <IntraTruckLoadContent /> */}
    </Layout>
  );
};

export default IntraTruckLoad;
