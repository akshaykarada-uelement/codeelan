"use client";

import {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    ZoomControl,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
import { useState } from "react";

// Fix leaflet marker missing icons (required for Next.js)
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
    iconRetinaUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png",
    iconUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
    shadowUrl:
        "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png",
});

export default function LeafletMap() {
    const [layerType, setLayerType] = useState("map");

    return (
        <div className="w-full h-[500px] overflow-hidden relative">

            {/* === Custom Map/Satellite Toggle === */}
            <div className="absolute top-4 left-4 z-[1000] bg-white rounded-[2px] flex overflow-hidden">
                <button
                    onClick={() => setLayerType("map")}
                    className={`px-4 py-2 text-sm transition ${layerType === "map"
                            ? "text-[#1A2B6D] font-bold bg-gray-200"
                            : "text-gray-600"
                        }`}
                >
                    Map
                </button>

                <button
                    onClick={() => setLayerType("sat")}
                    className={`px-4 py-2 text-sm border-l border-[#EEE] transition ${layerType === "sat"
                            ? "text-[#1E3A8A] font-bold bg-gray-200"
                            : "text-gray-600"
                        }`}
                >
                    Satellite
                </button>
            </div>

            <MapContainer
                center={[18.591728, 73.789212]}
                // ✅ CodeElan location
                zoom={15}
                scrollWheelZoom={true}
                zoomControl={false}
                className="h-full w-full"
            >
                <ZoomControl position="bottomright" />

                {layerType === "map" && (
                    <TileLayer
                        url="https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=TZduPOZwY7PSjvAi7bet"
                        attribution="&copy; MapTiler & OpenStreetMap contributors"
                    />
                )}

                {layerType === "sat" && (
                    <TileLayer
                        url="https://api.maptiler.com/maps/hybrid/{z}/{x}/{y}.jpg?key=TZduPOZwY7PSjvAi7bet"
                        attribution="&copy; MapTiler © OpenStreetMap contributors"
                    />
                )}

                {/* ✅ UPDATED MARKER */}
                <Marker position={[18.591728, 73.791999]}>

                    <Popup>
                        <b>CodeElan Technologies</b>
                        <br />
                        E402, S3 Lifestyle Apartments<br />
                        Pimple Saudagar, Pune<br />
                        Pimpri-Chinchwad, Maharashtra 411027
                    </Popup>

                </Marker>
            </MapContainer>
        </div>
    );
}
