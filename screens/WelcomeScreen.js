import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text: "Welcome to Job App", color: "#8EC5FC"},
    {text: "Choose your location", color: "#E0C3FC"},
    {text: "And you're good to go", color: "#21D4FD"},
];

export default class AuthScreen extends Component {
    onSlideComplete = () => {
        const {navigate} = this.props.navigation;

        navigate('auth');
    };

    render() {
        return (
            <Slides
                data={SLIDE_DATA}
                onComplete={this.onSlideComplete}
            />
        );
    }
}