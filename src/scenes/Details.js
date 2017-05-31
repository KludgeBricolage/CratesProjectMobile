import React, { Component }               from 'react';
import { List, ListItem, Text, Button }   from 'native-base';

import GlobalHeader from "../components/GlobalHeader";

export default class Details extends React.Component {
  constructor(props) {
    super(props)
  }

  getCrates() {
    return Object.entries(this.props.crate).map(([key, val], i)   => {
      return (
        <ListItem key={'key-'+ i}>
          <Text>{val}</Text>
        </ListItem>
      )
    })
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

module.exports = Details
