import React, {Component} from 'react';
import {View, ScrollView, Text, StyleSheet, Dimensions, Button} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

class Slides extends Component {
    renderSlides = () => {
        return this.props.data.map((slide, index) => {
            return (
                <View
                    key={slide.text}
                    style={[styles.slide, {backgroundColor: slide.color}]}
                >
                    <Text style={styles.text}>{slide.text}</Text>
                    {this.renderContinueButton(index)}
                </View>
            );
        })
    };

    renderContinueButton = (index) => {
        if (index === this.props.data.length - 1) {
            return (
                <View style={{ marginTop: 25 }}>
                    <Button
                        onPress={this.props.onComplete}
                        title="Continue"
                        color="#19A2C1"
                    />
                </View>
            )
        }
    };

    render() {
        return (
            <ScrollView
                horizontal
                pagingEnabled
                style={{ flex: 1 }}
            >
                {this.renderSlides()}
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    slide: {
        flex: 1,
        padding: 10,
        justifyContent: 'center',
        alignItems: 'center',
        width: SCREEN_WIDTH
    },
    text: {
        fontSize: 30,
        color: '#ffffff'
    },
    button: {
        backgroundColor: "#1FC7EE",
        marginTop: 15
    }
});

export default Slides;