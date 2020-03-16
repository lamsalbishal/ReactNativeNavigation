import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';

export default class SplashScreen extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };
    }

    gotoLogin = () => {
        Navigation.setRoot({
            root: {
                stack: {
                    id: 'App',
                    children: [
                        {
                            component: {
                                name: 'Login',
                            }
                        }
                    ],
                }
            }
        })
    }

    render() {
        return (
            <View style={styles.container} >
                <TouchableOpacity onPress={() => this.gotoLogin()}>
                    <Text> SplashScreen </Text>
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
