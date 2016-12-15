'use strict';

var React = require('react');
var ReactNative = require('react-native');

var ListCrates = require("./src/scenes/ListCrates");
var Details = require("./src/scenes/Details");
var MapPlot = require("./src/scenes/MapPlot");
var GlobalHeader = require("./src/components/GlobalHeader");

export default class LocationsProject extends React.Component {
  render() {
  return (
    <ReactNative.Navigator
      initialRoute={{id: 'details'}}
      renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'map':
        return (<MapPlot navigator={navigator} title="Map" {...route.passProps}/>);
      case 'list':
        return (<ListCrates navigator={navigator} title="ListCrates" {...route.passProps}/>);
      case 'details':
        return (<Details navigator={navigator} title="Details" {...route.passProps}/>);
      case 'global':
        return (<GlobalHeader navigator={navigator} title="Global Header" {...route.passProps}/>);
    }
  }
}
ReactNative.AppRegistry.registerComponent('LocationsProject', () => LocationsProject);
