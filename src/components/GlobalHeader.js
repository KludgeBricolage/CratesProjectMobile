import React from 'react';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

export default function (navigator, title) {
    return (
        <Header>
          <Button transparent onPress={navigator.pop}>
              <Icon name='ios-arrow-back'/>
          </Button>

          <Title>{title}</Title>

          <Button transparent>
              <Icon name='ios-menu' />
          </Button>
        </Header>
    );
}
