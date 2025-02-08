import React from "react";
import { memo, useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer } from "@react-google-maps/api";
import { getGeocode, getLatLng } from "use-places-autocomplete";
import { toast } from "react-toastify";

const containerStyle = {
  width: "100%",
  height: "100%",
};

function Map({ hoveredOrder = null }) {
  const [directions, setDirections] = useState(null);
  const [center, setCenter] = useState({
    lat: 36.737232,
    lng: 3.086472, 
  });

  useEffect(() => {
    if (!hoveredOrder) {
      setDirections(null);
      return;
    }

    const fetchDirections = async () => {
      const directionsService = new window.google.maps.DirectionsService();

      try {
        //@ts-ignore
        const originGeo = await getGeocode({ address: hoveredOrder?.departure });
        const origin = await getLatLng(originGeo[0]);

        //@ts-ignore
        const destinationGeo = await getGeocode({ address: hoveredOrder?.destination });
        const destination = await getLatLng(destinationGeo[0]);

        //@ts-ignore
        const waypoints = hoveredOrder?.intermediateDestinations?.map(async (city) => {
          const cityGeo = await getGeocode({ address: city });
          return { location: await getLatLng(cityGeo[0]), stopover: true };
        });

        const resolvedWaypoints = waypoints ? await Promise.all(waypoints) : [];

        directionsService.route(
          {
            origin,
            destination,
            waypoints: resolvedWaypoints,
            travelMode: window.google.maps.TravelMode.DRIVING,
          },
          (result, status) => {
            if (status === window.google.maps.DirectionsStatus.OK) {
              //@ts-ignore
              setDirections(result);
              setCenter(origin); // Centre la carte sur le point de départ
            } else {
              toast.error("Erreur lors du calcul de l'itinéraire");
            }
          }
        );
      } catch (error) {
        console.error("Erreur de géolocalisation :", error);
        toast.error("Impossible de récupérer l'itinéraire");
      }
    };

    fetchDirections();
  }, [hoveredOrder]);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={hoveredOrder ? 6 : 10} // Ajuste le zoom si hoveredOrder est null
      options={{ mapTypeControl: false, zoomControl: true }}
    >
      {directions && <DirectionsRenderer directions={directions} />}
    </GoogleMap>
  );
}

export default memo(Map);
