import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base';

import GlobalHeader from "../components/GlobalHeader";
import LightTheme from '../themes/light';

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
    return (
      <Container>
        { GlobalHeader(this.props.navigator, this.props.title) }
        <Content theme={ LightTheme }>
          <List>{this.getCrates()}</List>
        </Content>
      </Container>
    );
  }
};

module.exports = ListCrates;
