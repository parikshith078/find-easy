import {Map, InfoWindow, Marker, GoogleApiWrapper} from 'google-maps-react-18-support';
import React, { Component } from 'react';


export class MapContainer extends Component {
  render() {
    return (
      <Map google={this.props.google} 
      center={{
        lat: 12.988584998122324,
        lng: 77.57986112206059
      }}zoom={14}
      onClick={this.onMapClicked}
      >

        <Marker onClick={this.onMarkerClick}
                name={'Current location'} />

      </Map>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: ("AIzaSyAnJzTn9qzxW-Y9jV2YRuJhLWfksXxpX4E")
})(MapContainer)