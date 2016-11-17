'use strict';

var React = require('react');
var ReactNative = require('react-native');

var List = require('./List');
var Details = require('./Details');
var MapPlot = require('./MapPlot');

class LocationsProject extends React.Component {
  render() {
  return (
    <ReactNative.Navigator
      initialRoute={{id: 'map'}}
      renderScene={this.navigatorRenderScene}/>
    );
  }

  navigatorRenderScene(route, navigator) {
    switch (route.id) {
      case 'map':
        return (<MapPlot navigator={navigator} title="Map" {...route.passProps}/>);
      case 'list':
        return (<List navigator={navigator} title="List" {...route.passProps}/>);
      case 'details':
        return (<Details navigator={navigator} title="Details" {...route.passProps}/>);
    }
  }
}
ReactNative.AppRegistry.registerComponent('LocationsProject', () => LocationsProject);
