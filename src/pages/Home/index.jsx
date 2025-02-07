import HomeContent from "../../components/Home/HomeContent";
import Layout from "../../components/Layout";

const Home = () => {
  return (
    <Layout isLoading={false}>
      <HomeContent />
    </Layout>
  );
};

export default Home;
