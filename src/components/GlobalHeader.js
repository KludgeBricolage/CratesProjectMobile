import React                                                      from 'react';
import { DrawerLayoutAndroid, Dimensions }                        from 'react-native';
import { Container, Content, Text, Header, Title, Button, Icon, InputGroup, Input }  from 'native-base';

export default function (props, content) {

  const openDrawer  = (event) => { this.drawer.openDrawer() }
  const closeDrawer = (event) => { this.drawer.closeDrawer() }

  var query = {q: '' }

  function search() {
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    }
    fetch("https://122fa4e0.ngrok.io/api/v1/search", options)
      .then( (response) => response.json() )
      .then( (responseJson) => {
        props.navigator.push({
          id: 'list',
          passProps: {
            crates: responseJson.crates
          }
        })
      }).catch((error) => {
        console.error(error);
      });
  }

  var {height, width} = Dimensions.get('window')

  var navigationView = (
    <Content>
      <InputGroup>
        <Input
          placeholder="Search"
          onChangeText={(q)=> query = {q}}
        />
        <Icon name="ios-search" onPress={search}/>
      </InputGroup>
      <Button onPress={search}>
        Search
      </Button>

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
