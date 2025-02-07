import Offer1 from "./Offer1";
import Offer2 from "./Offer2";
import Offer3 from "./Offer3";

const Prices = () => {
  return (
    <section
      id="prices"
      className="w-full overflow-hidden flex flex-col gap-[6vh] px-[10vw]"
    >
      <div>
        <h3 className="text-[4.5rem] font-bold text-Typo text-center">
          Choose the perfect plan for your team
        </h3>
      </div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between gap-8 mb-20">
        <Offer1 />
        <Offer2 />
        <Offer3 />
      </div>
    </section>
  );
};

export default Prices;
