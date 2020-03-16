import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class PageThree extends Component {
    static options(passProps) {
        return {
          topBar: {
            rightButtons: {
              id: 'buttonOne',
              text: 'Button',
              color:'green'
            }
          }
        };
      }
    constructor(props) {
        super(props);
        Navigation.events().bindComponent(this);
        this.state = {
        };
    }

   
    
      navigationButtonPressed({ buttonId }) {
        console.log("check")
      }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={() => Navigation.popToRoot(this.props.componentId)}>
                    <Text> PageThree </Text>
                </TouchableOpacity>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    }
})

