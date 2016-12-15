'use strict';

import React, { Component } from 'react'
import {
  Text,
  View,
  TouchableHighlight,
  ToolbarAndroid
} from 'react-native';


class Details extends React.Component{
  render() {
    return (
      <View>
        <ToolbarAndroid title={this.props.title}/>
        <TouchableHighlight onPress={this.props.navigator.pop}>
          <Text>Go back to List</Text>
        </TouchableHighlight>
        <Text>{this.props.crate.title}</Text>
      </View>
    );
  }
};

module.exports = Details;
