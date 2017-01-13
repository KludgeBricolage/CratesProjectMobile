import React from 'react';
import { DrawerLayoutAndroid } from 'react-native';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

export default function (props) {

  const openDrawer  = (event) => { this.drawer.openDrawer(); }
  const closeDrawer = (event) => { this.drawer.closeDrawer(); }

  var navigationView = (
      <Content>
          <Text>Im in the Drawer!</Text>

          <Button onPress={closeDrawer}>
              Close
          </Button>

      </Content>
  );

  return (
    <DrawerLayoutAndroid
      ref={(_drawer) => this.drawer = _drawer}
      drawerWidth={300}
      renderNavigationView={() => navigationView}>
          <Header>
            <Button transparent onPress={openDrawer}>
                <Icon name='ios-menu' />
            </Button>

            <Title>{props.title}</Title>

            <Button transparent onPress={props.navigator.pop}>
                <Icon name='ios-arrow-back'/>
            </Button>
          </Header>
          <Content>

          </Content>
    </DrawerLayoutAndroid>
  );
}
