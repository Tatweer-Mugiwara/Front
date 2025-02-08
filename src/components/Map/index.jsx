import { memo, useCallback, useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer, MarkerF } from "@react-google-maps/api";
import { DEFAULT_ZOOM } from "../../../constants";
import { getGeocode } from "use-places-autocomplete";
import { toast } from "react-toastify";

const containerStyle = {
  width: "100%",
  height: "auto",
};

function Map({ onSelectCity = null, selectedCities = [], result = null }) {
  const [directions, setDirections] = useState(null);
  const [center, setCenter] = useState({
    lat: 36.737232,
    lng: 3.086472,
  });
  const [markers, setMarkers] = useState([]);
  const [localSelectedCities, setLocalSelectedCities] = useState([]);
  const [map, setMap] = useState(null);
  const [mapAnimation, setMapAnimation] = useState(null);

  const changeDestination = async (e) => {
    // Si on est en mode itinéraire (result fourni), on désactive le clic
    if (result) return;

    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();

    const newMarker = {
      lat: latitude,
      lng: longitude,
      id: Date.now(),
    };

    setCenter({ lat: latitude, lng: longitude });

    try {
      const result = await getGeocode({
        location: { lat: latitude, lng: longitude },
      });

      const currentAddress = result[0].formatted_address;

      const updatedMarker = {
        ...newMarker,
        address: currentAddress,
      };

      setMarkers((prevMarkers) => [...prevMarkers, updatedMarker]);

      // Mise à jour de l'état local
      const updatedCities = [...localSelectedCities, currentAddress];
      setLocalSelectedCities(updatedCities);

      // Appel du callback seulement s'il est fourni
      if (onSelectCity) {
        onSelectCity(updatedCities);
      }
    } catch (error) {
      toast.error("Something went wrong, try again", {
        position: "top-center",
        autoClose: 5000,
        pauseOnHover: true,
        draggable: true,
        theme: "light",
      });
    }
  };

  // Effect pour gérer l'affichage de l'itinéraire

  useEffect(() => {
    if (!selectedCities?.length || !result || !window.google) return;

    const fetchDirections = async () => {
      const directionsService = new window.google.maps.DirectionsService();

      try {
        // Récupération des coordonnées pour toutes les adresses
        const coordinates = await Promise.all(
          selectedCities.map(async (address) => {
            const geocodeResult = await getGeocode({ address });
            return {
              lat: geocodeResult[0].geometry.location.lat(),
              lng: geocodeResult[0].geometry.location.lng(),
            };
          })
        );

        // Création des points dans l'ordre spécifié par result, en excluant le dernier élément
        const orderedCoordinates = result
          .slice(0, -1)
          .map((index) => coordinates[index]);

        // Création des waypoints (en excluant le premier et le dernier point)
        const waypoints = orderedCoordinates.slice(1, -1).map((coord) => ({
          location: new window.google.maps.LatLng(coord.lat, coord.lng),
          stopover: true,
        }));

        const directionsResult = await directionsService.route({
          origin: new window.google.maps.LatLng(
            orderedCoordinates[0].lat,
            orderedCoordinates[0].lng
          ),
          destination: new window.google.maps.LatLng(
            orderedCoordinates[orderedCoordinates.length - 1].lat,
            orderedCoordinates[orderedCoordinates.length - 1].lng
          ),
          waypoints: waypoints,
          optimizeWaypoints: false,
          travelMode: window.google.maps.TravelMode.DRIVING,
        });

        setDirections(directionsResult);

        // Centrage de la carte sur l'itinéraire
        if (map && directionsResult.routes[0].bounds) {
          map.fitBounds(directionsResult.routes[0].bounds);
        }
      } catch (error) {
        toast.error("Error calculating route", {
          position: "top-center",
          autoClose: 5000,
        });
      }
    };

    fetchDirections();
  }, [selectedCities, result, map]);

  
  const onLoad = useCallback(function callback(map) {
    setMap(map);
    setMapAnimation(window.google.maps.Animation.DROP);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // Déterminer si on doit afficher les marqueurs
  const shouldShowMarkers = !result && (!selectedCities.length || onSelectCity);

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      onLoad={onLoad}
      onUnmount={onUnmount}
      options={{
        mapTypeControl: false,
        zoomControl: true,
        zoomControlOptions: {
          position: window.google.maps.ControlPosition.RIGHT_TOP,
        },
        zoom: DEFAULT_ZOOM,
      }}
      onClick={changeDestination}
    >
      {directions && <DirectionsRenderer directions={directions} />}

      {shouldShowMarkers &&
        markers.map((marker) => (
          <MarkerF
            key={marker.id}
            position={{ lat: marker.lat, lng: marker.lng }}
            animation={mapAnimation}
            onClick={() => {
              toast.info(marker.address, {
                position: "top-center",
                autoClose: 3000,
              });
            }}
          />
        ))}
    </GoogleMap>
  );
}

export default memo(Map);
