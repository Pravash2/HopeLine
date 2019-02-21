import React from "react";
import L from "leaflet";

const style = {
  width: "100%",
  height: "300px"
};

class Map extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hospital:[],
      rehospital:[]
    };
     this.setState({hospital:this.props.hospitals})
  }
  componentDidMount() {
    this.setState({rehospital:this.state.hospital.map((hospita)=>hospita.Location_Coordinates)})
    this.map = L.map("map", {
      center: [20.2961, 85.8245],
      zoom: 12,
      layers: [
        L.tileLayer("http://{s}.tile.osm.org/{z}/{x}/{y}.png", {
          attribution:
            '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        })
      ]
    });

    // add marker
    this.marker = L.marker(this.props.markerPosition).addTo(this.map);
  }
  componentDidUpdate({ markerPosition }) {
    // check if position has changed
    if (this.props.markerPosition !== markerPosition) {
      this.marker.setLatLng(this.props.markerPosition);
    }
  }
  render()
   {
     console.log(this.state.rehospital)
    return <div id="map" style={style} />;
  }
}

export default Map;
