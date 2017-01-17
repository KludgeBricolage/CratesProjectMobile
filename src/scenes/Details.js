import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

import GlobalHeader from "../components/GlobalHeader";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var content = (
      <Button>Hello World</Button>
    )

    return (
      GlobalHeader(this.props, content)
    );
  }
}

module.exports = Details;
