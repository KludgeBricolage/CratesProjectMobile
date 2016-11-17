'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  StyleSheet
} from 'react-native';
import Dimensions from 'Dimensions';
import MapView from 'react-native-maps';

var styles = require('./Style');
const pStyles = StyleSheet.create({
  map: {
    position: 'absolute',
    top: Dimensions.get('window').height * .10,
    bottom: 0,
    left: 0,
    right: 0,
    height: Dimensions.get('window').height * .90,
  },
});

class MapPlot extends React.Component{
  nav(passTheseCrates){
    this.props.navigator.push({
      id: 'list',
      passProps: {
        crates: passTheseCrates,
      }
    })
  }

  constructor () {
    super()
    /*  TODO:
          1) Fetch from JSON - Do when crate x location model is established
            2) check if async + create methods for loading data (to prepare for #3)
            3) Filters and/or Search
            4) Research on pictures from json (for crate pics)
            5) Details.js (crate details)
          5) code cleanup (consider global variables)
          6) consider: dedicated search page (for UX)

        NOW:
          1) Toolbar
          2) Basic Design

        REMINDER:
          - List.js has comment
          - check if index can hold global variables
          - search manipulates the json.
    */
    const markers = [
      {title: "Makati", desc: "# of Crates", coords:{longitude:121.02444519999995, latitude:14.554729}},
      {title: "Pasig", desc: "# of Crates", coords:{longitude:121.08510969999998, latitude:14.5763768}}
    ]
    this.state = { markers };
  }

  render() {
    const { region } = this.props;
    const aspectRatio = Dimensions.get('window').width / Dimensions.get('window').height
    const latDelta = 0.0922

    var passedObject = this.state.markers;

    let markers = this.state.markers.map((marker, i) => {
      // return <Text key={i}>{row.name}: {row.text}</Text>
      return (
        <MapView.Marker key={i} coordinate={marker.coords}
                          title={marker.title} description={marker.desc}>
          <MapView.Callout onPress={ () => this.nav(passedObject) } />

        </MapView.Marker>
      )
    })

    return (
      <View>
        <ToolbarAndroid style={styles.toolbar} title={this.props.title}/>
        <MapView
            style={pStyles.map}
            initialRegion={{ //Map initialize (Coords are just above Mandaluyong)
              latitude: 14.5994443,
              longitude: 121.03591740000002,
              latitudeDelta: 0.1722, //Yolo
              longitudeDelta: 0.121, //Yolo
            }}
          >
          { markers }
        </MapView>
      </View>
    );
  }
};

module.exports = MapPlot;
