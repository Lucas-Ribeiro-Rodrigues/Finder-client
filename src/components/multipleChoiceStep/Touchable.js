import React, {Component} from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';

export default class Touchable extends Component{
    render()
    {
        return(
            <TouchableOpacity 
                onPress={() => this.props.onPressHandler(this.props.buttonIndex, this.props.text)}
                style={(this.props.active ? styles.buttonActive : styles.buttonNotActive)}>
                <Text
                    style={(this.props.active ? styles.textButtonActive : styles.textButtonNotActive)}>
                    {this.props.text}
                </Text>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    buttonNotActive: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 1,
        alignSelf: "stretch",
        justifyContent: "center",
        borderColor: '#d6d7da',
        backgroundColor: '#fff',
    },
    textButtonNotActive: {
        fontSize: 20,
        color: "black", 
    },
    buttonActive: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        alignSelf: "stretch",
        justifyContent: "center",
        backgroundColor: 'green',
        borderColor: '#d6d7da',
    },
    textButtonActive: {
        fontSize: 20,
        color: "white", 
    }
  });