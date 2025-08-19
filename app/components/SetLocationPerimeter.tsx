"use client";

import React, { useState, useEffect } from "react";
import { Box, Heading, Text, Button } from "grommet";
import { MapContainer, TileLayer, Marker, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";

// Fix default Leaflet marker icon issue in Next.js
const icon = new L.Icon({
  iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

export default function SetLocationPerimeter() {
  const [position, setPosition] = useState<{ lat: number; lng: number } | null>(
    null
  );
  const [radius, setRadius] = useState(2000); // default 2 km

  // Ask for location on mount
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (pos) => {
          setPosition({
            lat: pos.coords.latitude,
            lng: pos.coords.longitude,
          });
        },
        (err) => {
          console.error("Error getting location:", err);
          // fallback to default location
          setPosition({ lat: 51.505, lng: -0.09 });
        }
      );
    } else {
      console.error("Geolocation not supported");
      setPosition({ lat: 51.505, lng: -0.09 });
    }
  }, []);

  const handleSave = () => {
    console.log("Saved Perimeter:", { position, radius });
    alert(
      `Perimeter saved!\nLocation: ${position?.lat}, ${position?.lng}\nRadius: ${radius}m`
    );
  };

  return (
    <Box pad="medium" gap="small" fill>
      <Heading level={3}>Set Location Perimeter</Heading>
      <Text>
        Manager can define a radius around their current location for clock-in
        eligibility.
      </Text>

      <Box direction="row" gap="small" align="center">
        <Text>Radius (meters):</Text>
        <input
          type="number"
          value={radius}
          onChange={(e) => setRadius(Number(e.target.value))}
        />
      </Box>

      <Box height="medium" border>
        {position ? (
          <MapContainer
            center={position}
            zoom={15}
            style={{ height: "100%", width: "100%" }}
          >
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker
              position={position}
              icon={icon}
              draggable
              eventHandlers={{
                dragend: (e) => {
                  const latlng = (e.target as L.Marker).getLatLng();
                  setPosition(latlng);
                },
              }}
            />
            <Circle center={position} radius={radius} color="purple" />
          </MapContainer>
        ) : (
          <Text>Getting your location...</Text>
        )}
      </Box>

      <Button primary label="Save Perimeter" onClick={handleSave} />
    </Box>
  );
}

