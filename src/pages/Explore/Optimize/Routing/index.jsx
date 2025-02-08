import { useLoadScript } from "@react-google-maps/api";
import { libraries } from "../../../../../constants";
import Layout from "../../../../components/Layout";
import RoutingContent from "../../../../components/Optimization/Routing";

const Routing = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: import.meta.env.VITE_GOOGLE_MAP_API_KEY,
    libraries: libraries,
  })

  return (
    <Layout isLoading={!isLoaded}>
      <RoutingContent />
    </Layout>
  );
};

export default Routing;
