import React                                                      from 'react';
import { DrawerLayoutAndroid, Dimensions }                        from 'react-native';
import { Container, Content, Text, Header, Title, Button, Icon }  from 'native-base';

export default function (props, content) {

  const openDrawer  = (event) => { this.drawer.openDrawer() }
  const closeDrawer = (event) => { this.drawer.closeDrawer() }

  var {height, width} = Dimensions.get('window')

  var navigationView = (
    <Content>
      <Text>Im in the Drawer!</Text>

      <Button onPress={closeDrawer}>
          Close
      </Button>
    </Content>
  );

  function renderBackButton() {
    if(props.title != "Map") {
      return (
        <Button transparent onPress={props.navigator.pop}>
          <Icon name='ios-arrow-back'/>
        </Button>
      );
    }
  }

  return (
    <DrawerLayoutAndroid
      ref={(_drawer) => this.drawer = _drawer}
      drawerWidth={width * .5}
      drawerPosition={DrawerLayoutAndroid.positions.Right}
      renderNavigationView={() => navigationView}>
          <Header iconRight>
            { renderBackButton() }

            <Button transparent onPress={openDrawer}>
              <Icon name='ios-menu' />
            </Button>

            <Title>{props.title}</Title>
          </Header>
          <Content>
            { content }
          </Content>
    </DrawerLayoutAndroid>
  )
}
