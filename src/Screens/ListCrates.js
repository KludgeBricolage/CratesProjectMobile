'use strict';

import React, { Component } from 'react'
import { Container, Content, List, ListItem, Text } from 'native-base';

class ListCrates extends React.Component{
  nav(details){
    this.props.navigator.push({
      id: 'details',
      passProps: {
        crate: details,
      }
    })
  }

  printJson() {
    var dummy = require('../Assets/dummy.json');


    return Object.entries(dummy.data).map((key, i) => {
      return Object.entries(dummy.data[i]).map(([key, val], i)   => {
        if(key == "place") {
          return (
            <ListItem key={'key-'+ i}>
              <Text>{val}</Text>
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
    })
  }

  render() {
    // var items = this.props.crates;
    var items = ['Simon Mignolet','Nathaniel Clyne','Dejan Lovren','Mama Sakho','Emre Can'];
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
