import { useLoadScript } from "@react-google-maps/api";
import Layout from "../../../../components/Layout";
import RouteConsolidationContent from "../../../../components/Optimization/RouteConsolidation/RouteConsolidationContent";
import { libraries } from "../../../../../constants";

const RouteConsolidation = () => {
    const { isLoaded } = useLoadScript({
      googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
      libraries: libraries,
    })

  return (
    <Layout isLoading={!isLoaded}>
      <RouteConsolidationContent />
    </Layout>
  );
};

export default RouteConsolidation;
