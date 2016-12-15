'use strict';

import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base';

class ListCrates extends React.Component{
  nav(objectToPass){
    this.props.navigator.push({
      id: 'details',
      passProps: {
        crate: objectToPass,
      }
    })
  }

  printJson() {
    var dummy = require('../Assets/dummy.json');

    return Object.entries(this.props.crates).map(([key, val], i)   => {
      return (
        <ListItem key={'key-'+ i}>
          <Text onPress={ () => this.nav(val) }>{val.title}</Text>
        </ListItem>
      );
    })
/*  //Practicing .map() ;; to practice: functional programming
    return Object.entries(dummy.data).map((key, i) => {
      return Object.entries(dummy.data[i]).map(([key, val], i)   => {
        if(key == "place") {
          return (
            <ListItem key={'key-'+ i}>
              <Text>{val}</Text>
            </ListItem>
          );
        } else if(key == "coords") {
          return (
            <ListItem key={'key-'+ i}>
              <Text>{val.latitude + " | " + val.longitude}</Text>
            </ListItem>
          );
        } else if(key == "crates") {
          return Object.entries(val).map(([key, val], i)   => {
            return (
              <ListItem key={'key-'+ i}>
                <Text>{val.title + ""}</Text>
              </ListItem>
            );
          })
        }
      })
    })*/
  }

  render() {
    return (
      <Container>
        <Content>
          <List>{this.printJson()}</List>
        </Content>
      </Container>
    );
  }
};

module.exports = ListCrates;
