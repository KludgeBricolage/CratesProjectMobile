import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base';

import GlobalHeader from "../components/GlobalHeader";

class ListCrates extends React.Component{
  nav(objectToPass){
    this.props.navigator.push({
      id: 'details',
      passProps: {
        crate: objectToPass,
      }
    })
  }

  getCrates() {
    return Object.entries(this.props.crates).map(([key, val], i)   => {
      return (
        <ListItem key={'key-'+ i} onPress={ () => this.nav(val) }>
          <Text>{val.title}</Text>
        </ListItem>
      );
    })
  }

  render() {
    var content = (
      <List>{this.getCrates()}</List>
    )

    return (
      GlobalHeader(this.props, content)
    );
  }
};

module.exports = ListCrates;
