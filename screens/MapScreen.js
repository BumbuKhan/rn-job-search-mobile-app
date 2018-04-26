import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MapView } from 'expo';

export default class AuthScreen extends Component {
    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421,
                    }}
                />
            </View>
        );
    }
}