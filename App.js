import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }



  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={() => Navigation.push(this.props.componentId, { component: { name: 'Login' } })}>
          <Text> App </Text>
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