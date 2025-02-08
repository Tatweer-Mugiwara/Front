import { useEffect, useState } from "react";
import { useKeenSlider } from "keen-slider/react"
import TruckItem from "./TruckItem";

export default function TrucksList({
  data,
  setData,
  trucks
}) {
  const [isFilterEnabled, setIsFilterEnabled] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false)
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel)
    },
    created() {
      setLoaded(true)
    },
    slides: {
      perView: 3,
      spacing: 50,
    }
  })

  useEffect(() => {
    if (isFilterEnabled) {
      setData(trucks.filter(truck => truck.status === 'active'))
    } else {
      setData(trucks)
    }
  }, [isFilterEnabled]);

  return (
    <div className="w-full outline-none">
      <div className="overflow-x-auto mt-4 flex flex-col gap-10">
        <div className="flex items-center justify-between">
          <p className="text-mainColor text-2xl font-semibold capitalize">
            You can filter the trucks according to their status (active or not):
          </p>
          <button onClick={() => {
            setIsFilterEnabled(!isFilterEnabled);
          }} className={`px-16 py-3 font-unbounded font-bold border-2 hover:opacity-70 transition-all ${isFilterEnabled ? 'bg-mainColor text-white border-transparent' : 'bg-white text-mainColor border-mainColor'}`}>
              Filter
          </button>
        </div>
        <div className="flex justify-center flex-col gap-10 w-full max-w-[1500px] mx-auto mt-4">
          <div className="keen-slider w-full" ref={sliderRef}>
            {
              data.map((truck, index) => (
                <TruckItem key={index} truck={truck} />
              ))
            }
          </div>
          {
            loaded && instanceRef.current && (
              <div className="flex items-center w-full px-20 justify-around">
                <button onClick={() => instanceRef.current.prev()} className="hover:opacity-50 opacity-100 transition-all" disabled={currentSlide === 0}>
                  <img src="/images/Carousel/left-arrow.svg" alt="Left Arrow" />
                </button>
                <p className="font-unbounded font-semibold text-mainColor text-2xl">{currentSlide+1}/{data.length}</p>
                <button onClick={() => instanceRef.current.next()} className="hover:opacity-50 opacity-100 transition-all" disabled={currentSlide === data?.length}>
                  <img src="/images/Carousel/right-arrow.svg" alt="Right Arrow" />
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  )
}
