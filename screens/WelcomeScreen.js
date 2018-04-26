import _ from 'lodash';
import React, {Component} from 'react';
import {AsyncStorage} from 'react-native';
import {AppLoading} from 'expo';

import Slides from '../components/Slides';

const SLIDE_DATA = [
    {text: "Welcome to Job App", color: "#8EC5FC"},
    {text: "Choose your location", color: "#E0C3FC"},
    {text: "And you're good to go", color: "#21D4FD"},
];

export default class AuthScreen extends Component {
    state = { token: null };

    async componentWillMount() {
        let token = await AsyncStorage.getItem('fb_token');

        if (token) {
            this.props.navigation.navigate('main');
        } else {
            this.setState({token: false});
        }
    }

    onSlideComplete = () => {
        const {navigate} = this.props.navigation;
        navigate('auth');
    };

    render() {
        if (_.isNull(this.state.token)) {
            return (
                <AppLoading />
            );
        }

        return (
            <Slides
                data={SLIDE_DATA}
                onComplete={this.onSlideComplete}
            />
        );
    }
}