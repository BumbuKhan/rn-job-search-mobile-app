import React, {Component} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import { MapView } from 'expo';
import {connect} from 'react-redux';
import {Button} from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';

import {fetchJobs} from '../actions';

class AuthScreen extends Component {
    state = {
        region: {
            longitude: -122,
            latitude: 37,
            longitudeDelta: 0.04,
            latitudeDelta: 0.09
        }
    };

    onRegionChangeComplete = (region) => {
        this.setState({region});
    };

    render() {
        return (
            <View style={{ flex: 1 }}>
                <MapView
                    style={{ flex: 1 }}
                    region={this.state.region}
                    onRegionChangeComplete={this.onRegionChangeComplete}
                />

                <View style={styles.buttonContainer}>
                    <Button
                        title="Search This Area"
                        onPress={() => {this.props.fetchJobs(this.state.region)}}
                        buttonStyle={{ backgroundColor: "#009688" }}
                        icon={
                            <Icon
                                name='search'
                                size={15}
                                color='white'
                            />
                        }
                    />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    buttonContainer: {
        position: 'absolute',
        bottom: 20,
        left: 0,
        right: 0,
        paddingLeft: 10,
        paddingRight: 10
    }
});

export default connect(null, {fetchJobs})(AuthScreen);