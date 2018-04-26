import React, {Component} from 'react';
import {View, Text, StyleSheet, AsyncStorage} from 'react-native';
import {connect} from 'react-redux';

import {facebookLogin} from '../actions';

class AuthScreen extends Component {
    componentDidMount() {
        this.props.facebookLogin();

        AsyncStorage.removeItem('fb_token');
    }

    render() {
        return (
            <View style={styles.container}>
                <Text>AuthScreen</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default connect(null, {facebookLogin})(AuthScreen);