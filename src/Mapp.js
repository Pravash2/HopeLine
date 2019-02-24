import React, { Component } from "react";
import { render } from "react-dom";
import Control from "react-leaflet-control";
import {
  Map,
  Marker,
  Popup,
  TileLayer,
  ZoomControl,
  CircleMarker,
  ScaleControl
} from "react-leaflet";
import L from "leaflet";

import Dialog from "./Dialog.js";

const IconUrl=[L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/5e6p-045-hospital.png"
            }),L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/z1eH-009-mortar-1.png"
            }),L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/VdN1-001-ambulance.png"
            }),L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/PBYV-034-eye-2.png"
            }),L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/fB5_-095-tooth-1.png"
            }),L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/yrU2-051-flask.png"
            }),
            ,L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/z1eH-009-mortar-1.png"
            })
            ,L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/KJLJ-045-hospital.png"
            }),L.icon({
              iconUrl:
                "https://uploads.codesandbox.io/uploads/user/6f8b104e-6915-422e-95e8-f395886bcc19/AZgl-084-stretcher.png"
            })]

export default class SimpleExample extends React.Component {
  constructor() {
    super();
    this.state = {
      markers: [[20.2823, 85.7702], [20.2954, 85.8433]]
    };
  }
  componentDidMount() {
    const hospitals = this.props.hospitals
      .map(hospital => hospital.Location_Coordinates)
      .filter(hospital => hospital.length == 2);
    this.setState({
      markers: hospitals
    });
  }

  render() {
    return (
      <Map
        style={{ height: `${window.innerHeight}px`, flex: 1 }}
        center={[20.2961, 85.8245]}
        zoom={14}>
        <TileLayer
          attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
          url="http://{s}.tile.osm.org/{z}/{x}/{y}.png"
        />
        {this.state.markers.map((position, idx) => (
          <Marker
            key={`marker-${idx}`}
            position={position}
            icon={IconUrl[9]}
            opacity={1}>
            <Popup>
              <Dialog
                positions={position}
                hospitals={this.props.hospitals.filter(
                  hospital => hospital.Location_Coordinates == position
                )}
              />
            </Popup>
          </Marker>
        ))}
        <CircleMarker center={[20.2961, 85.8245]} />
      </Map>
    );
  }
}
