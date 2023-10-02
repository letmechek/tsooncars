import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import {mapPin} from '@heroicons/react/24/outline'
import 'leaflet/dist/leaflet.css';


export default function Location() {
  const center = [43.688027, -79.393931]; // Coordinates for 227 Buteko Avenue, Town Centre, Ndola, Zambia

  return (
    <div>
    <MapContainer   
        center={center}
        zoom={16}
        style={{ height: "50vh", width: "100%" }}
        className="leaflet-container mt-3"
        attributionControl={false}
     >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="Map data &copy; OpenStreetMap contributors"
      />
      <Marker position={center} >
  <Popup>
    <h3>Location Details</h3>
    <p>227 St Clair Ave</p>
  </Popup>
</Marker>
    </MapContainer>
    </div>
  );
}
  
