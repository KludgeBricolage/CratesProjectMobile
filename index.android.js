'use strict';

var React = require('react');
var ReactNative = require('react-native');

var ListCrates = require("./src/Screens/ListCrates");
var Details = require("./src/Screens/Details");
var MapPlot = require("./src/Screens/MapPlot");

class LocationsProject extends React.Component {
  render() {
  return (
    <ReactNative.Navigator
      initialRoute={{id: 'list'}}
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
    }
  }
}
ReactNative.AppRegistry.registerComponent('LocationsProject', () => LocationsProject);
