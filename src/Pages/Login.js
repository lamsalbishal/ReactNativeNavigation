import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import { goToAuth } from '../BottomNavigation';

export default class Login extends Component {
  static get options() {
    return {
      topBar: {
        visible: false, // visible
       
      }
    };
  }
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  PageOne = () => {
    Navigation.setRoot({
      root: {
        stack: {
          id: 'App',
          children: [
            {
              component: {
                name: 'PageOne',
              },
              
              options: {
                bottomTabs: {
                  visible: false,
                  drawBehind: true,
                  animate: true,
                },
                
              },
            }
          ],
        }
      }
    })

  }

  signup = () => {
    goToAuth()
  }

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.PageOne}>
          <Text> Login </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={this.signup}
        >
          <Text>Signup</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'gray',
    justifyContent: 'center',
    alignItems: 'center'
  }
})
