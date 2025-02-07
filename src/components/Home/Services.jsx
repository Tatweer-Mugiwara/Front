import React from "react";

const Services = () => {
  return (
    <div className="mt-20 flex justify-between px-[4rem] md:px-[7rem]">
      <div>
        <div className="relative max-w-[20rem] border-mainColor border-2 bg-mainColor text-white pt-12 pb-5 px-5">
          <img
            className="absolute max-w-[5rem] -top-11"
            src="/images/Home/Icon.svg"
            alt=""
          />
          <h2 className="text-lg font-bold mb-5">Property Management</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            perferendis beatae soluta nulla tenetur numquam
          </p>
        </div>
      </div>
      <div>
        <div className="relative max-w-[20rem] border-mainColor border-2 pt-12 pb-5 px-5">
          <img
            className="absolute max-w-[5rem] -top-11"
            src="/images/Home/Icon2.svg"
            alt=""
          />
          <h2 className="text-lg font-bold mb-5">Property Management</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            perferendis beatae soluta nulla tenetur numquam
          </p>
        </div>
      </div>
      <div>
        <div className="relative max-w-[20rem] border-mainColor border-2  pt-12 pb-5 px-5">
          <img
            className="absolute max-w-[5rem] -top-11"
            src="/images/Home/Icon3.svg"
            alt=""
          />
          <h2 className="text-lg font-bold mb-5">Property Management</h2>
          <p className="text-sm">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Id
            perferendis beatae soluta nulla tenetur numquam
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
