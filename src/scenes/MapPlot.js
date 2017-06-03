'use strict';

import React, { Component } from 'react'
import { StyleSheet }       from 'react-native';
import Dimensions           from 'Dimensions';
import MapView              from 'react-native-maps';
import GlobalHeader         from "../components/GlobalHeader";

const style = StyleSheet.create({
  map: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height
  },
})

class MapPlot extends React.Component{
  constructor(props) {
    super(props);
    this.state = { locations: [] };
  }

  componentDidMount() {
    let options = { method: 'POST' }
    fetch("https://122fa4e0.ngrok.io/api/v1/locations", options)
      .then( (response) => response.json() )
      .then( (responseJson) => {
        this.setState({ locations: responseJson.locations })
      }).catch((error) => {
        console.error(error);
      });
  }

  nav(objectToPass){
    this.props.navigator.push({
      id: 'list',
      passProps: {
        crates: objectToPass
      }
    })
  }

  getCrates(value) {
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        place: value.name,
        longitude: value.lng,
        latitude: value.lat
      })
    }
    fetch("https://122fa4e0.ngrok.io/api/v1/pulls", options)
      .then( (response) => response.json() )
      .then( (responseJson) => {
        this.nav(responseJson.crates)
      }).catch((error) => {
        console.error(error);
      });
  }

  markers() {
    var dummy = require('../assets/map.json');
    return Object.entries(this.state.locations).map(([key, value], i) => {
      return (
        <MapView.Marker key={i} coordinate={
          {longitude: Number.parseFloat(value.lng), latitude: Number.parseFloat(value.lat)}
        } title={value.name}>
          <MapView.Callout onPress={ () => {this.getCrates(value)} } />
        </MapView.Marker>
      )
    })
  }

  render() {
    var content = (
      <MapView
        style={style.map}
        initialRegion={{ //Map initialize (Coords are just above Mandaluyong)
          latitude: 14.5994443,
          longitude: 121.03591740000002,
          latitudeDelta: 0.1722,
          longitudeDelta: 0.121,
        }}
      >
        { this.markers() }
      </MapView>
    );

    return (
      GlobalHeader(this.props, content)
    )
  }
}

module.exports = MapPlot
