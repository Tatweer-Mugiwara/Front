import React from "react";

const SupportContent = () => {
  return (
    
    <div className="w-screen flex flex-col items-center gap-16 my-16">
      <h1 className="text-[3rem] capitalize font-bold text-[#0B3558]">
        Let’s keep in touch
      </h1>
      <div className="flex flex-col imtes-center gap-16">
        <div className="flex gap-16">
          <div className="flex gap-8 items-center">
            <img src="/images/User/Instagram.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
          <div className="flex gap-8 items-center">
            <img src="/images/User/x.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
        </div>
        <div className="flex gap-16">
          <div className="flex gap-8 items-center">
            <img src="/images/User/Facebook.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
          <div className="flex gap-8 items-center">
            <img src="/images/User/Gmail.png" alt="" />
            <p>la_bengherbia@esi.dz</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SupportContent;
