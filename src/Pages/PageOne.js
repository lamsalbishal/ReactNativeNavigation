import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Navigation } from 'react-native-navigation';
import loadNews from '../store/actions/actions'
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

 class PageOne extends Component {
    static get options() {
        return {
            topBar: {
                visible: true, // visible
                title: {
                    text: "Page One"
                }
            }
        };
    }

    constructor(props) {
        super(props);
        this.state = {
        };
    }

    pageTwo = () => {
        Navigation.push(this.props.componentId, {
            component: {
              name: 'PageTwo',
            },
           
          });
    }

    render() {
        console.log("props",this.props.news)
        return (
            <View style={styles.container}>
                <TouchableOpacity onPress={this.pageTwo}>
                    <Text> PageOne </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

mapStateToProps = ({ news }) => {
    return { news };
};

mapDispatchToProps = dispatch => {
    return bindActionCreators({ loadNews }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(PageOne);


const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'gray'
    }
})




