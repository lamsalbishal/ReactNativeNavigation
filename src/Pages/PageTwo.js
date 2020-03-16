import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class PageTwo extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    pageThree = () => {
        Navigation.push(this.props.componentId, {
            component: {
                name: 'PageThree',
            },

        });
    }

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.pageThree}>
                    <Text> PageTwo </Text>
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


