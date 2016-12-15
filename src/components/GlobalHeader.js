import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

export default class GlobalHeader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (

        <Header>
          <Button transparent>
              <Icon name='ios-arrow-back' />
          </Button>

          <Title>Header</Title>

          <Button transparent>
              <Icon name='ios-menu' />
          </Button>
        </Header>

    );
  }
}

module.exports = GlobalHeader;
