import React, { Component } from 'react';
import { Container, Content, List, ListItem, Text, Title, Icon, Header, Button, Footer, FooterTab } from 'native-base';

export default class Details extends Component {
  render() {
      return (
          <Container>
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
      );
  }
}
module.exports = Details;
