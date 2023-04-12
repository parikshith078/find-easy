// import {Map, InfoWindow, Marker, GoogleApiWrapper, markerEventHandler, mapEventHandler} from 'google-maps-react-18-support';
// import React, { Component } from 'react';

// export class MapContainer extends Component {
//   render() {
//     return (
//       <Map google={this.props.google}
//       center={{
//         lat: 12.988584998122324,
//         lng: 77.57986112206059
//       }}zoom={14}
//       onClick={this.onMapClicked}
//       >

//         <Marker onClick={this.onMarkerClick}
//                 name={'Current location'} />

//       </Map>
//     );
//   }
// }

// export default GoogleApiWrapper({
//   apiKey: ("AIzaSyAnJzTn9qzxW-Y9jV2YRuJhLWfksXxpX4E")
// })(MapContainer)
//
import React from "react";
import { Map, GoogleApiWrapper, IMapProps } from "google-maps-react-18-support";

interface MapContainerProps extends IMapProps {
  google: any;
  // onClick: () => void;
}

const mapStyles: React.CSSProperties = {
  width: "100%",
  height: "100%",
};

const MapContainer: React.FC<MapContainerProps> = (props) => {
  const { google, onClick } = props;

  return (
    <Map
      google={google}
      style={mapStyles}
      initialCenter={{ lat: 37.774929, lng: -122.419416 }}
      zoom={8}
      // onClick={onClick}
    />
  );
};

export default GoogleApiWrapper({
  apiKey: "AIzaSyAnJzTn9qzxW-Y9jV2YRuJhLWfksXxpX4E",
})(MapContainer);
