import React, { Component } from 'react';
import { Image } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { Content, Text, Button, Card, CardItem } from 'native-base';

import GlobalHeader from "../components/GlobalHeader";

export default class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    //temporary
    var dummy = require('../assets/crates.json');
    const crate = dummy.crates[0]
    // const crate = this.props.crate

    var content = (
      <Card style={{ flex: 0 }}>
        <CardItem>
          <Text>{ crate.name }</Text>
          <Text note>{ crate.created_at }</Text>
        </CardItem>
        <CardItem cardBody>
          <ImageSlider images={ crate.pictures }/>
        </CardItem>
      </Card>
    )

    return (
      GlobalHeader(this.props, content)
    )
  }
}

module.exports = Details
