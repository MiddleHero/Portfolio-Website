"use client";

import { MapContainer, TileLayer } from "react-leaflet";

export default function Map() {
  return (
    <div className="border border-background rounded-xl overflow-hidden ">
      <MapContainer
        center={[29.9511, -90.0715]}
        zoom={13}
        className="h-48 w-full "
        zoomControl={false}
        attributionControl={false}
        dragging={true}
        doubleClickZoom={false}
        scrollWheelZoom={true}
        touchZoom={true}
        boxZoom={false}
        keyboard={false}
      >
        <TileLayer
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; CARTO'
        />
      </MapContainer>
    </div>
  );
}
