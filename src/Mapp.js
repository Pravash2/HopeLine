import React, { Component } from 'react'
import { render } from 'react-dom';
import Control from 'react-leaflet-control';
import { Map, Marker, Popup, TileLayer, ZoomControl, ScaleControl } from 'react-leaflet';
import L from 'leaflet'


import Dialog from './Dialog.js'



export default class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[20.2823, 85.7702],[20.2954,85.8433]]
    };
  }
  componentDidMount(){
    const hospitals=this.props.hospitals.map(hospital=>hospital.Location_Coordinates).filter(hospital=>hospital.length==2)
    this.setState({
      markers:hospitals
    })
  }
  
  render() {
    
    return (
      <Map 
      style={{height:`${window.innerHeight}px`,flex:1}}
        center={[20.2961, 85.8245]} 
        zoom={12} 
        >
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url='http://{s}.tile.osm.org/{z}/{x}/{y}.png'
        />
        {this.state.markers.map((position, idx) => 
          <Marker  key={`marker-${idx}`} position={position}>
          <Popup>
            <Dialog positions={position} hospitals={this.props.hospitals.filter(hospital=>hospital.Location_Coordinates==position)} />
          
          </Popup>
        </Marker>
        )}
      </Map>
    );
  }
}