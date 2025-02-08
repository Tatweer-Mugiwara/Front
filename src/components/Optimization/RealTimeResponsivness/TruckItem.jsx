import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getGeocode } from "use-places-autocomplete";

const truck_map = [
    '/images/Truck/truck1.png',
    '/images/Truck/truck2.png',
    '/images/Truck/truck3.png'
]

export default function TruckItem({
    truck,
    index
}) {
    const [placeLoading, setPlaceLoading] = useState(true);
    const [currentPlace, setCurrentPlace] = useState(null);

    const getPlace = async () => {
        setPlaceLoading(true);
        try {
            const res = await getGeocode({
                location: {
                    lat: truck?.currentLocation?.coordinates[0],
                    lng: truck?.currentLocation?.coordinates[1]
                }
            });
            if (res?.length > 0) {
                setCurrentPlace(res[0].formatted_address);
            }
        } catch (error) {
            console.error("Error getting place:", error);
        } finally {
            setPlaceLoading(false);
        }
    }

    useEffect(() => {
        if (truck?.currentLocation?.coordinates) {
            getPlace();
        }
    }, [truck?.currentLocation?.coordinates]);
    return ( 
        <Link to={'/explore/real-time-responsivness/'+truck?._id} className="bg-greyer keen-slider__slide max-w-[100px] w-full p-6">
            <div className="flex items-center justify-center w-full">
                <img src={truck_map[index % truck_map.length]} alt="Truck" />
            </div>
            <div>
                <div className="flex items-center justify-center flex-col gap-3 py-3 mt-5">
                    <button className="px-16 py-3 bg-mainColor text-white text-2xl font-unbounded font-bold">Status</button>
                    <p className="font-semibold font-unbounded text-mainColor text-2xl">IN SERVICE</p>
                </div>
                <div className="bg-white p-4 mt-6">
                    <div className="flex gap-4 flex-col font-semibold font-unbounded text-mainColor text-center mt-6">
                        <div>
                            <p className="font-unbounded text-lg">ID: {truck?.matricule}</p>
                        </div>
                        <div>
                            <p className="font-unbounded text-lg">DRIVER: {
                                `${truck?.driver?.firstName ?? "Sami"} ${truck?.driver?.lastName ?? "Baitech"}`
                            }</p>
                        </div>
                        <div>
                            <p className="font-unbounded text-lg">CURRENT PLACE: {placeLoading ? "Loading..." : currentPlace || "Not available"}</p>
                        </div>
                        <div>
                            <p className="font-unbounded text-lg">Sensors: {truck?.capteurs?.length}</p>
                        </div>
                    </div>
                    {
                        !!truck?.capteurs.length
                        &&
                        <div className="border-2 border-mainColor mt-10 p-4 flex flex-col gap-4 w-full">
                            {
                                truck?.capteurs.map((c, index) => (
                                    <div className="flex items-center justify-around" key={index}>
                                        <button className="px-8 py-3 bg-mainColor text-white text-xl font-unbounded font-bold">Status</button>
                                        <p className="text-center font-unbounded font-semibold">{c?.code}</p>
                                    </div>
                                ))
                            }
                        </div>
                    }
                </div>
            </div>
        </Link>
    )
}
