import maplibregl from 'maplibre-gl';
import 'maplibre-gl/dist/maplibre-gl.css';
import { useEffect, useRef, useState } from 'react';

export default function Map({ localisation }) {

    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng] = useState(localisation?.lng ?? 139.753);
    const [lat] = useState(localisation.lat ?? 35.6844);
    const [zoom] = useState(18);
    const [API_KEY] = useState(import.meta.env.VITE_MAP_KEY);

    useEffect(() => {
        if (map.current) return;
        map.current = new maplibregl.Map({
            container: mapContainer.current,
            pitch: 60,
            bearing: -60,
            locale: 'en',
            style: `https://api.maptiler.com/maps/streets-v2/style.json?key=${API_KEY}`,
            center: [lng, lat],
            zoom: zoom
        });
    }, [API_KEY, lng, lat, zoom]);

    return (
        <div className="map-wrap w-full border-2 border-black">
            <div ref={mapContainer} className="map" />
        </div>
    );
}