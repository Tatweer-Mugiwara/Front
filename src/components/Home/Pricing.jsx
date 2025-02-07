import React from 'react'

const Pricing = () => {
  return (
    <div className="mt-20 bg-black text-white p-10 text-center">
        <p className="font-bold bg-mainColor py-3 px-8 w-fit mr-auto ml-auto mb-16">
          PRICING & COLLECTIONS
        </p>
        <h2 className="font-unbounded font-bold text-[3rem] mb-11">
          COMPREHENSIVE GUIDE TO THE BEST PRICING
        </h2>
        <p className="mb-10">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut quo
          facilis molestias illum explicabo deleniti distinctio! Odio totam et
          dolores minus aut atque libero vitae! Veritatis provident vitae iusto
          ullam.
        </p>
        <div className="flex items-center">
          <div className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0"></div>
          <div className="flex-grow h-[1px] bg-white"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0 bg-secondaryColor"></div>
          <div className="flex-grow h-[1px] bg-white"></div>
          <div className="w-6 h-6 rounded-full border-2 border-white flex-shrink-0 "></div>
          <div className="flex-grow h-[1px] bg-white"></div>
          <div className="w-2 h-2 rounded-full border-2 border-white bg-white"></div>
        </div>

        <div className="flex justify-between mt-10 text-left">
          <div className="max-w-[25rem] ">
            <p className="font-bold mb-4">Residential</p>
            <p className="mb-4">
              <span className="font-bold ">$100 - $200</span> Per Month
            </p>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              debitis libero repellendus sint obcaecati quisquam?
            </p>
          </div>
          <div className="max-w-[25rem] ">
            <p className="font-bold mb-4">Commercial</p>
            <p className="mb-4">
              <span className="font-bold ">$300 - $400</span> Per Month
            </p>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              debitis libero repellendus sint obcaecati quisquam?
            </p>
          </div>
          <div className="max-w-[25rem] ">
            <p className="font-bold mb-4">Industrial</p>
            <p className="mb-4">
              <span className="font-bold ">$500 - $700</span> Per Month
            </p>
            <p className="text-sm">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Magnam,
              debitis libero repellendus sint obcaecati quisquam?
            </p>
          </div>
        </div>

        <div className="grid grid-cols-3 grid-rows-2 mt-16 min-h-[30rem] gap-10">
          <div className="relative row-span-2 mr-10">
            <img className="" src="/images/Home/Image1.svg" alt="Image1" />
            <div className="absolute bottom-10 ml-2">
              <p className="flex gap-4 text-sm">
                <img className="w-3" src="/images/Home/locationIcon.svg" alt="locationIcon" />
                Beb Ezzouar
              </p>
              <p className="text-lg font-bold mt-2">Simple Small Building</p>
            </div>
            <img
              className="absolute bottom-4 w-[4rem] h-[4rem] right-0"
              src="/images/Home/ArrowBuilding.svg"
              alt=""
            />
          </div>
          <div className=" mr-10 relative">
            <img className="" src="/images/Home/Image2.svg" alt="Image2" />
            <div className="absolute bottom-4 ml-2">
              <p className="flex gap-4 text-sm">
                <img className="w-3" src="/images/Home/locationIcon.svg" alt="locationIcon" />
                Beb Ezzouar
              </p>
              <p className="text-lg font-bold mt-2">White Villa Minimalist</p>
            </div>
            <img
              className="absolute bottom-0 right-0 w-[4rem] h-[4rem]"
              src="/images/Home/ArrowBuilding.svg"
              alt=""
            />
          </div>
          <div className="relative mr-10">
            <img className=" " src="/images/Home/Image3.svg" alt="Image3" />
            <div className="absolute bottom-4 ml-2">
              <p className="flex gap-4 text-sm">
                <img className="w-3" src="/images/Home/locationIcon.svg" alt="locationIcon" />
                Beb Ezzouar
              </p>
              <p className="text-lg font-bold mt-2">Elagant Building</p>
            </div>
            <img
              className="absolute bottom-0 w-[4rem] h-[4rem] right-0"
              src="/images/Home/ArrowBuilding.svg"
              alt=""
            />
          </div>
          <div className="relative mr-10">
            <img className="" src="/images/Home/Image4.svg" alt="Image4" />
            <div className="absolute bottom-4 ml-2">
              <p className="flex gap-4 text-sm">
                <img className="w-3" src="/images/Home/locationIcon.svg" alt="locationIcon" />
                Beb Ezzouar
              </p>
              <p className="text-lg font-bold mt-2">Elagant Building</p>
            </div>
            <img
              className="absolute bottom-0 w-[4rem] h-[4rem] right-0"
              src="/images/Home/ArrowBuilding.svg"
              alt=""
            />
          </div>
          <div className="relative mr-10">
            <img className="" src="/images/Home/Image5.svg" alt="Image5" />
            <div className="absolute bottom-4 ml-2">
              <p className="flex gap-4 text-sm">
                <img className="w-3" src="/images/Home/locationIcon.svg" alt="locationIcon" />
                Beb Ezzouar
              </p>
              <p className="text-lg font-bold mt-2">Modern Building</p>
            </div>
            <img
              className="absolute bottom-0 w-[4rem] h-[4rem] right-0"
              src="/images/Home/ArrowBuilding.svg"
              alt=""
            />
          </div>
        </div>
      </div>
  )
}

export default Pricing