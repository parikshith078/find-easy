import styles from "@/styles/catalouge.module.css";
import React, { useState, useEffect, useRef } from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react-18-support";
import { GeoPoint } from "firebase/firestore";

interface MapContainerProps {
  google: any;
}

const MapContainer: React.FC<MapContainerProps> = (props) => {
  const { google } = props;
  const [markerPosition, setMarkerPosition] = useState<{
    lat: number;
    lng: number;
  }>({ lat: 0, lng: 0 });
  const mapRef = useRef<any>(null);

  useEffect(() => {
    // Get the user's current position
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setMarkerPosition({ lat, lng });

        // Animate the map to the user's current location
        const map = mapRef.current?.map;
        if (map) {
          const newPos = new google.maps.LatLng(lat, lng);
          map.panTo(newPos);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  }, [google]);

  const handleMapClick = (mapProps: any, map: any, clickEvent: any) => {
    const lat = clickEvent.latLng.lat();
    const lng = clickEvent.latLng.lng();
    setMarkerPosition({ lat, lng });
  };

  const handleCurrentLocationClick = () => {
    // Get the user's current position again
    navigator.geolocation.getCurrentPosition(
      (position) => {
        const lat = position.coords.latitude;
        const lng = position.coords.longitude;
        setMarkerPosition({ lat, lng });

        // Animate the map to the user's current location
        const map = mapRef.current?.map;
        if (map) {
          const newPos = new google.maps.LatLng(lat, lng);
          map.panTo(newPos);
        }
      },
      (error) => {
        console.error(error);
      }
    );
  };

  const handleSubmit = () => {
    const location = new GeoPoint(markerPosition.lat, markerPosition.lng);
    console.log(
      `Latitude: ${markerPosition.lat}, Longitude: ${markerPosition.lng}`
    );
    return location;
  };

  return (
    <div className={styles.maps}>
      <div className={styles.maps}>
        {/* @ts-ignore */}
        <Map
          google={google}
          zoom={8}
          initialCenter={markerPosition}
          onClick={handleMapClick}
          ref={mapRef}
        >
          <Marker position={markerPosition} />
        </Map>
      </div>
      <div className="flex">
        <button
          onClick={handleCurrentLocationClick}
          className="btn btn-primary ml-4"
        >
          Current Location
        </button>
        <button onClick={handleSubmit} className="btn btn-primary ml-4">
          Submit
        </button>
      </div>
    </div>
  );
};

export default GoogleApiWrapper({
  apiKey: process.env.API_KEY,
})(MapContainer);
