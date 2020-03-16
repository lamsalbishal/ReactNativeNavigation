import React, { Component } from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

const dcolor = {
  color:  "green"
}
export default class Signup extends Component {
    static get options() {
        return {
          topBar: {
            visible: true, // visible
            title: {
              text: "Signup"
            },
            rightButtons: [
                {
                  id: 'myDynamicButton',
                  text: 'My Button',
                  color:  dcolor.color
                }
              ]
          }
        };
      }

  constructor(props) {
    super(props);
    this.state = {
    };
  }
  changeColor = () => {
      dcolor.color = "red"
      console.log("hello",dcolor.color)
  }

  render() {
    console.log("color",dcolor.color)
    return (
      <View style={{backgroundColor:'red',flex:1}}>
          <TouchableOpacity onPress={this.changeColor}>
          <Text style={{color:'#fff'}}> Change header color</Text>
          </TouchableOpacity>
      
      </View>
    );
  }
}
