import React from "react";

const Hero = () => {
  return (
    <div className="flex justify-between px-[4rem] md:px-[7rem]">
      <div>
        <h2 className="font-bold font-unbounded text-[3rem] max-w-[30rem] mb-20">FIELD CONSTRUCTION TRAKING</h2>
        <p className="text-sm max-w-[55rem] mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          similique expedita recusandae vel. Aliquam tempore, quae voluptate
          deleniti fuga inventore doloribus repellendus quod eaque? Incidunt,
          ratione! Modi ratione eos temporibus velit dicta error accusamus
          voluptatem porro, nihil commodi impedit tempora nemo, expedita
          nostrum. Soluta perspiciatis earum, culpa dolores magni tenetur quae
          veniam, provident, doloribus suscipit animi laboriosam repellat
          voluptatem! Debitis?
        </p>
      </div>
      <img className="max-w-[10rem] self-end" src="/images/Home/LinkedPath.svg" alt="LinkedPath" />
    </div>
  );
};

export default Hero;
