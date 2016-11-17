'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid,
  StyleSheet
} from 'react-native';

var styles = require('./Style');

class List extends React.Component{
  nav(details){
    this.props.navigator.push({
      id: 'details',
      passProps: {
        crate: details,
      }
    })
  }

  render() {

    let crates = this.props.crates.map((crate, i) => {
      return (
        <TouchableHighlight key={i} onPress={ () => this.nav(crate) }>
          <Text>{crate.title}</Text>
        </TouchableHighlight>
      )
    })

    return (
      <View>
        <ToolbarAndroid style={styles.toolbar} title={this.props.title}/>



        {/*}<TouchableHighlight onPress={ () => this.nav() }>
          <Text>Navigate to Details screen </Text>
        </TouchableHighlight>
        // could be a view all crates w/ details in a nutshell
        //    if tuloy: add another page + mind the routes*/}

        { crates }

        <TouchableHighlight onPress={this.props.navigator.pop}>
          <Text>Go back to Map</Text>
        </TouchableHighlight>
      </View>
    );
  }
};

module.exports = List;
