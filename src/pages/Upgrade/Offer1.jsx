import React from "react";
import Feature from "./Features";

const Offer1 = () => {
  return (
    <div className="md:w-[25vw] w-[80vw] h-[66vh] text-mainColor border-[1.5px] cursor-pointer hover:border-[#0B3558]  border-Gray66 transition-all ease-in-out duration-300 bg-white flex items-center justify-center">
      <div className="flex flex-col items-start w-[90%] gap-[3.5vh]">
        <h2 className="font-bold text-[1.6rem]">Lorem Ipsum</h2>
        <div className="flex gap-2 items-center">
          <h2 className="font-bold text-[2.7rem]">3.99$</h2> <span className="text-xl">(free-trial for <span className="font-bold">14 DAYS</span>)</span>
        </div>
        <div className="h-[1px] w-[100%] bg-[#E7EDF6]"></div>
        <div className="flex flex-col gap-4">
          <Feature text={"Lorem ipsum dolor sit amet"} />
          <Feature text={"Consectetur adipiscing elit"} />
          <Feature text={"Sed do eiusmod tempor"} />
          <Feature text={"Incididunt ut labore et dolore"} />
        </div>
        <button className="w-full bg-mainColor hover:text-mainColor text-white border-2 border-Typo text-[1.4rem] font-bold py-[12px]  hover:text-Typo hover:bg-transparent transition-all ease-in-out duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Offer1;
