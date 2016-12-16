import React, { Component } from 'react'
import { StyleSheet, DrawerLayoutAndroid } from 'react-native';
import { Container, Content, List, ListItem, Text, Header, Title, Button, Icon } from 'native-base';

export default class Drawer extends React.Component {

    constructor() {
       super();
       this.openDrawer = this.openDrawer.bind(this);
       this.closeDrawer = this.closeDrawer.bind(this);
    }
    openDrawer() { this.drawer.openDrawer(); }
    closeDrawer() { this.drawer.closeDrawer(); }
    render() {
        var navigationView = (
            <Content>
                <Text>Im in the Drawer!</Text>

                <Button onPress={this.closeDrawer}>
                    Close
                </Button>

            </Content>
        );
        return (
            <DrawerLayoutAndroid
              ref={(_drawer) => this.drawer = _drawer}
              drawerWidth={300}
              drawerPosition={DrawerLayoutAndroid.positions.Right}
              renderNavigationView={() => navigationView}>
                  <Header>
                    <Button transparent>
                        <Icon name='ios-arrow-back'/>
                    </Button>

                    <Title>Drawer</Title>

                    <Button transparent onPress={this.openDrawer}>
                        <Icon name='ios-menu' />
                    </Button>
                  </Header>
                  <Content>
                    <List>
                      <ListItem><Text>
                          Expected Output - Upper right button works
                      </Text></ListItem>
                      <ListItem><Text>
                          {"Problem: can't render if it's in a class"}
                      </Text></ListItem>
                      <ListItem><Text>
                          {"Workaround = use a function... functions don't have constructors"}
                      </Text></ListItem>
                      <ListItem><Text>
                          {"TODO: Find an alternative. Possibly React's .setState"}
                      </Text></ListItem>
                      <ListItem><Text>
                          {"To test the app, go to ./index.android.js and change the initialRoute (line 15) to map"}
                      </Text></ListItem>
                    </List>

                  </Content>
            </DrawerLayoutAndroid>
        );
    }
}

module.exports = Drawer;
