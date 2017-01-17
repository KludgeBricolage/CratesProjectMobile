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
  nav(objectToPass){
    this.props.navigator.push({
      id: 'list',
      passProps: {
        crates: objectToPass,
      }
    })
  }

  markers() {
    var dummy = require('../assets/dummy.json');
    return Object.entries(dummy.data).map(([key, value], i) => {
      return (
        <MapView.Marker key={i} coordinate={value.coords} title={value.place}>
          <MapView.Callout onPress={ () => this.nav(value.crates) } />
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
