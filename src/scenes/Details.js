import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import ImageSlider from 'react-native-image-slider';
import { Content, Text, Button, Card, CardItem, Badge } from 'native-base';

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
        <CardItem style={[styles.inline]}>
          <Badge info>{ crate.states }</Badge>
          <Text style={[styles.name]}>  { crate.name }</Text>
          <Text note>by { crate.user.alias }</Text>
        </CardItem>
        <CardItem>
          <ImageSlider images={ crate.pictures }/>
        </CardItem>
        <CardItem>
          <Text>{ crate.description }</Text>
        </CardItem>
        <CardItem style={[styles.inline]}>
        {
          crate.tags.map((tag, i) =>
            <Badge warning key={'key-'+ i} style={{marginRight: 7}}>{tag}</Badge>
          )
        }
        </CardItem>
      </Card>
    )

    return (
      GlobalHeader(this.props, content)
    )
  }
}

var styles = StyleSheet.create({
  inline: {
    flexWrap: 'wrap',
    alignItems: 'flex-start',
    flexDirection:'row',
  },
  name: {
    flexGrow: 5
  }
})

module.exports = Details
