"use client";

import { useEffect, useState } from "react";
import { MapContainer, TileLayer } from "react-leaflet";

// Make sure Leaflet CSS is imported somewhere in your project (e.g., layout.tsx or here)
import "leaflet/dist/leaflet.css";

export default function Map() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    // Return a placeholder with the exact same dimensions to prevent layout shift
    return <div className="h-48 w-full bg-muted animate-pulse rounded-xl" />;
  }

  return (
    <div className="border border-background rounded-xl overflow-hidden">
      <MapContainer
        center={[29.9511, -90.0715]}
        zoom={13}
        className="h-48 w-full"
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
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/attributions">CARTO</a>'
        />
      </MapContainer>
    </div>
  );
}
