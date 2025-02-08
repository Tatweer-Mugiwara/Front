// @ts-nocheck
import { memo, useCallback, useEffect, useState } from "react";
import { GoogleMap, DirectionsRenderer, MarkerF } from "@react-google-maps/api";
import { DEFAULT_ZOOM } from "../../../constants";
import { getGeocode } from "use-places-autocomplete";
import { toast } from "react-toastify";

const containerStyle = {
  width: "100%",
  height: "auto",
};

function Map({ onSelectCity }) {
  const [directions, setDirections] = useState(null);
  const [center, setCenter] = useState({
    lat: 36.737232,
    lng: 3.086472,
  });
  const [markers, setMarkers] = useState([]);  // Changed from single marker to array of markers
  const [selectedCities, setSelectedCities] = useState([]);

  const changeDestination = async (e) => {
    const latitude = e.latLng.lat();
    const longitude = e.latLng.lng();
    
    // Create new marker object
    const newMarker = {
      lat: latitude,
      lng: longitude,
      id: Date.now() // Add unique identifier for each marker
    };
    
    setCenter({ lat: latitude, lng: longitude });
    
    try {
      const result = await getGeocode({
        location: { lat: latitude, lng: longitude },
      });
      
      const currentAddress = result[0].formatted_address;
      
      // Update markers with location and address
      const updatedMarker = {
        ...newMarker,
        address: currentAddress
      };
      
      setMarkers(prevMarkers => [...prevMarkers, updatedMarker]);
      setSelectedCities(prevCities => [...prevCities, currentAddress]);
      onSelectCity([...selectedCities, currentAddress]);
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

  const [map, setMap] = useState(null);
  const [mapAnimation, setMapAnimation] = useState(null);

  const onLoad = useCallback(function callback(map) {
    setMap(map);
    setMapAnimation(window.google.maps.Animation.DROP);
  }, []);

  const onUnmount = useCallback(function callback(map) {
    setMap(null);
  }, []);

  // Optional: Function to remove a marker/city
  const removeMarker = (markerId) => {
    setMarkers(prevMarkers => prevMarkers.filter(marker => marker.id !== markerId));
    setSelectedCities(prevCities => prevCities.filter((_, index) => 
      markers[index].id !== markerId
    ));
  };

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
          position: google.maps.ControlPosition.RIGHT_TOP,
        },
        zoom: DEFAULT_ZOOM,
      }}
      onClick={changeDestination}
    >
      {/* Render all markers */}
      {markers.map((marker) => (
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