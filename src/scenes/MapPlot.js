'use strict';

import React, { Component } from 'react'
import { StyleSheet } from 'react-native';

import GlobalHeader from "../components/GlobalHeader";

import Dimensions from 'Dimensions';
import MapView from 'react-native-maps';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

const pStyles = StyleSheet.create({
  map: {
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height
  },
});

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
      );
    })
  }

  render() {
    return (
      <Container>
        { GlobalHeader(this.props.navigator, this.props.title) }
        <Content>
          <MapView
            style={pStyles.map}
            initialRegion={{ //Map initialize (Coords are just above Mandaluyong)
              latitude: 14.5994443,
              longitude: 121.03591740000002,
              latitudeDelta: 0.1722, //Yolo
              longitudeDelta: 0.121, //Yolo
            }}
          >
            { this.markers() }
          </MapView>
        </Content>
      </Container>
    );
  }
};

module.exports = MapPlot;
