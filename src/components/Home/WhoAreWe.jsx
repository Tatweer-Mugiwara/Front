import React from "react";

const WhoAreWe = () => {
  return (
    <div className="flex mt-20 justify-between px-[4rem] md:px-[7rem]">
      <img className="max-w-[25rem]" src="/images/Home/WhoAreWe.svg" alt="WhoAreWe" />
      <div className="max-w-[42rem]">
        <p className="font-bold bg-mainColor text-white w-fit px-8 py-3 mb-10">
          WHO ARE WE
        </p>
        <h2 className="font-unbounded font-bold max-w-[38rem] text-[3rem] mb-10">
          AN ARCHITECTURE TO SHOW OUR APPRECIATION
        </h2>
        <p className="text-sm">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Libero,
          ullam expedita commodi recusandae nisi ipsa. Architecto ratione cumque
          porro. Temporibus dolorem ea laudantium cumque blanditiis
        </p>
        <ul className="mt-10">
          <li className="flex mb-3">
            <img src="/images/Home/right.svg" alt="right" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, tenetur.
            </p>
          </li>
          <li className="flex mb-3">
            <img src="/images/Home/right.svg" alt="right" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, tenetur.
            </p>
          </li>
          <li className="flex mb-3">
            <img src="/images/Home/right.svg" alt="right" />
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Consequuntur, tenetur.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default WhoAreWe;
