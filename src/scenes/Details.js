import React, { Component }               from 'react';
import { List, ListItem, Text, Button }   from 'native-base';

import GlobalHeader from "../components/GlobalHeader";

export default class Details extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    var content = (
      <Button>Hello World</Button>
    )

    return (
      GlobalHeader(this.props, content)
    )
  }
}

module.exports = Details
