import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

import GlobalHeader from "../components/GlobalHeader";

export default class Details extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Container>
      { GlobalHeader(this.props.navigator, this.props.title) }
        <Content>
            <List dataArray={this.props.crate}
                renderRow={(item) =>
                    <ListItem>
                        <Text>{item}</Text>
                    </ListItem>
                }>
            </List>
        </Content>
      </Container>

        // <GlobalHeader />
    );
  }
}

module.exports = Details;
