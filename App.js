import React, {Component} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TabNavigator, StackNavigator} from 'react-navigation';
import {Provider} from 'react-redux';

import store from './store';
import AuthScreen from './screens/AuthScreen';
import WelcomeScreen from './screens/WelcomeScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';

export default class App extends Component {
    render() {
        const MainNavigator = TabNavigator({
            welcome: { screen: WelcomeScreen },
            auth: { screen: AuthScreen },
            main: {
                screen: TabNavigator({
                    map: { screen: MapScreen },
                    deck: { screen: DeckScreen },
                    review: {
                        screen: StackNavigator({
                            review: ReviewScreen,
                            settings: SettingsScreen
                        })
                    }
                })
            }
        }, {
            navigationOptions: {
                tabBarVisible: false
            }
        });

        return (
            <Provider store={store}>
                <MainNavigator />
            </Provider>
        );
    }
}