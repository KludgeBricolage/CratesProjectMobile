import React, { Component }       from 'react'
import { List, ListItem, Text }   from 'native-base';

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
    if(this.props.crates == "" || this.props.crates == 0) {
      return (
        <ListItem key='0' onPress={ this.props.navigator.pop }>
          <Text>There are no Crates at this location.</Text>
        </ListItem>
      )
    } else {
      return Object.entries(this.props.crates).map(([key, val], i)   => {
        return (
          <ListItem key={'key-'+ i} onPress={ () => this.nav(val) }>
            <Text>{val.name}</Text>
          </ListItem>
        )
      })
    }
  }

  render() {
    var content = (
      <List>{this.getCrates()}</List>
    )

    return (
      GlobalHeader(this.props, content)
    )
  }
}

module.exports = ListCrates
