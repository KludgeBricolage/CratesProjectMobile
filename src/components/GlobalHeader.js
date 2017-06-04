import React from 'react';
import { DrawerLayoutAndroid, Dimensions, StyleSheet } from 'react-native';
import { Container, Content, Text, Header, Title, Button, Icon, InputGroup, Input } from 'native-base';

export default function (props, content) {
  const GLOBAL = require('../components/Global');
  const openDrawer  = (event) => { this.drawer.openDrawer() }
  const closeDrawer = (event) => { this.drawer.closeDrawer() }

  var query = {q: '' }

  var styles = StyleSheet.create({
    inline: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
    },
    name: {
      flexGrow: 5
    }
  })


  function search() {
    let options = {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(query)
    }
    fetch(GLOBAL.NGROK_URL + "/api/v1/search", options)
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
      <InputGroup style={[styles.inline]}>
        <Input
          placeholder="Search"
          onChangeText={(q)=> query = {q}}
        />
        <Icon name="ios-search" onPress={search}/>
      </InputGroup>
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

            <Title>{props.title} {GLOBAL.HOST_URL}</Title>
          </Header>
          <Content>
            { content }
          </Content>
    </DrawerLayoutAndroid>
  )

  var styles = StyleSheet.create({
    inline: {
      flexWrap: 'wrap',
      alignItems: 'flex-start',
      flexDirection:'row',
    }
  })

}
