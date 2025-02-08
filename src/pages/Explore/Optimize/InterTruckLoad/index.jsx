import { useLoadScript } from "@react-google-maps/api";
import Layout from "../../../../components/Layout";
import InterTruckLoadContentContent from "../../../../components/Optimization/InterTruckLoad";
import { libraries } from "../../../../../constants";

const InterTruckLoadContent = () => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
      libraries: libraries,
    })

  return (
    <Layout isLoading={!isLoaded}>
      <InterTruckLoadContentContent />
    </Layout>
  );
};

export default InterTruckLoadContent;
