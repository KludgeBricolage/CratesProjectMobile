'use strict';

import React from 'react';
import ReactNative from 'react-native';

import ListCrates from './src/scenes/ListCrates';
import Details from './src/scenes/Details';
import MapPlot from './src/scenes/MapPlot';
import Drawer from './src/scenes/Drawer';

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
      case 'drawer':
        return (<Drawer navigator={navigator} title="Drawer" {...route.passProps}/>);
    }
  }
}
ReactNative.AppRegistry.registerComponent('LocationsProject', () => LocationsProject);
