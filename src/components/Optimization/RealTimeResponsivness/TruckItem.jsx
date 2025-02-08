import { Link } from "react-router-dom";

const truck_map = [
    '/images/Truck/truck1.png',
    '/images/Truck/truck2.png',
    '/images/Truck/truck3.png'
]

export default function TruckItem({
    truck
}) {
    return (
        <Link to={'/explore/real-time-responsivness/'+truck?.id} className="bg-greyer keen-slider__slide max-w-[100px] w-full p-6">
            <div className="flex items-center justify-center w-full">
                <img src={truck_map[Math.floor(Math.random() * truck_map.length)]} alt="Truck" />
            </div>
            <div>
                <div className="flex items-center justify-center flex-col gap-3 py-3 mt-5">
                    <button className="px-16 py-3 bg-mainColor text-white text-2xl font-unbounded font-bold">Status</button>
                    <p className="font-semibold font-unbounded text-mainColor text-2xl">IN SERVICE</p>
                </div>
                <div className="bg-white p-4 mt-6">
                    <div className="flex gap-4 flex-col font-semibold font-unbounded text-mainColor text-center mt-6">
                        <div>
                            <p className="font-unbounded text-lg">ID: 218 16 000254</p>
                        </div>
                        <div>
                            <p className="font-unbounded text-lg">DRIVER: 218 16 000254</p>
                        </div>
                        <div>
                            <p className="font-unbounded text-lg">CITY: 218 16 000254</p>
                        </div>
                        <div>
                            <p className="font-unbounded text-lg">Sensors: 218 16 000254</p>
                        </div>
                    </div>
                    <div className="border-2 border-mainColor mt-10 p-4 flex flex-col gap-4 w-full">
                        {
                            [...new Array(4)].map((_, index) => (
                                <div className="flex items-center justify-around" key={index}>
                                    <button className="px-8 py-3 bg-mainColor text-white text-xl font-unbounded font-bold">Status</button>
                                    <p className="text-center font-unbounded font-semibold">VALUE</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </Link>
    )
}
