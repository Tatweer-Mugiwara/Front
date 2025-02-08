// @ts-nocheck
import {memo, useCallback, useEffect, useState} from 'react';
import {GoogleMap, DirectionsRenderer, MarkerF} from '@react-google-maps/api';
import { DEFAULT_ZOOM } from '../../../constants';
import { getGeocode } from 'use-places-autocomplete';
import { toast } from "react-toastify";

const containerStyle = {
    width: '100%',
    height: 'auto'
};

function Map() {
    const [directions, setDirections] = useState(null);
    const [center, setCenter] = useState({
        lat: -3.745,
        lng: -38.523
    });
    const [marker, setMarker] = useState({
        lat: -3.745,
        lng: -38.523
    });

    const changeDestination = async (e) => {
        const { lat: getLat, lng: getLng } = e.latLng;
        const latitude = e.latLng.lat();
        const longitude = e.latLng.lng();
        setMarker({ lat: latitude, lng: longitude });
        setCenter({ lat: latitude, lng: longitude });
        getGeocode({
            location: { lat: latitude, lng: longitude },
        }).then((r) => {
            const currentAddress = r[0].formatted_address;
        })
        .catch((e) => {
            toast.error('Something went wrong, try again', {
                position: "top-center",
                autoClose: 5000,
                pauseOnHover: true,
                draggable: true,
                theme: "light",
            })
        });
    }

    const [map, setMap] = useState(null)
    const [mapAnimation, setMapAnimation] = useState(null)
    const onLoad = useCallback(function callback(map) {
        const bounds = new window.google.maps.LatLngBounds(center);
        map.fitBounds(bounds);        
        setMap(map)
        setMapAnimation(window.google.maps.Animation.DROP);
    }, [])
    const onUnmount = useCallback(function callback(map) {
        setMap(null)
    }, [])

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
                    position: google.maps.ControlPosition.RIGHT_TOP
                },
                zoom: DEFAULT_ZOOM
            }}
            onClick={changeDestination}
        >
            <MarkerF position={marker} animation={mapAnimation} />
        </GoogleMap>
    );
}

export default memo(Map);