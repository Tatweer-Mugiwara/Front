import FeaturesContent from "../../../components/User/Feature/FeaturesContent";
import Layout from "../../components/Layout";

const Features = () => {
  return (
    <Layout isLoading={isLoading}>
      <FeaturesContent />
    </Layout>
  );
};

export default Features;