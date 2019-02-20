import React from 'react';
import { render } from 'react-dom';
import Map from './Map';
import axios from 'axios'

export default class App extends React.Component {

    state={
        hospital:[]
    }

      componentDidMount() {
    axios.get(`https://data.gov.in/node/356921/datastore/export/json`)
      .then(res => {
        this.setState({hospital:res.data.data.filter(da=>da[6]=="Odisha")})
      })
  }

  
  render() {
    const { markerPosition } = this.state;
    if(this.state.hospital){
                console.log(this.state.hospital)
        }
    return (
      <div>
        <Map markerPosition={markerPosition} />
      </div>
    );
  }
}


