import Layout from "../../components/Layout";
import Offer1 from "./Offer1";
import Offer2 from "./Offer2";
import Offer3 from "./Offer3";

const Upgrade = () => {
  return (
    <Layout>
      <section
        id="prices"
        className="w-full overflow-hidden flex flex-col gap-[6vh] px-[10vw]"
      >
        <div>
          <h3 className="text-6xl font-bold text-Typo text-center">
          Our Plans
          </h3>
        </div>
        <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 mb-20">
          <Offer1 />
          <Offer2 />
          <Offer3 />
        </div>
      </section>
    </Layout>
  );
};

export default Upgrade;
