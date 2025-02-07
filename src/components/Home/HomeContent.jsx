import React from "react";
import Pricing from "./Pricing";
import WhoAreWe from "./WhoAreWe";
import Services from "./Services";
import Hero from "./Hero";
import Footer from "./Footer";
import Partners from "./Partners";

const HomeContent = () => {
  return (
    <div className="mt-20">
      <Hero />
      <Services />
      <WhoAreWe />
      <Pricing />
      <Partners />
      <Footer />
    </div>
  );
};

export default HomeContent;
