import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

export default class AuthScreen extends Component {
    static navigationOptions = (props) => {
        const {navigate} = props.navigation;

        return {
            title: 'Review Jobs',
            headerRight: <Button
                title="Settings"
                buttonStyle={{
                    backgroundColor: "rgba(0, 0, 0, 0)",
                }}
                textStyle={{
                    color: "rgba(0, 122, 255, 1)"
                }}
                onPress={() => {
                    navigate('settings');
                }}/>
        }
    };

    render() {
        return (
            <View style={styles.container}>
                <Text>ReviewScreen</Text>
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