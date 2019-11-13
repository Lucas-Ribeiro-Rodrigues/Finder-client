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
        maxHeight:65,
        backgroundColor: '#fff',
    },
    textButtonNotActive: {
        paddingLeft: 10, 
        fontSize: 20,
        color: "black", 
    },
    buttonActive: {
        flex: 1,
        borderRadius: 4,
        borderWidth: 0.5,
        maxHeight: 65,
        alignSelf: "stretch",
        justifyContent: "center",
        backgroundColor: '#DBE0EE',
        borderColor: '#d6d7da',
    },
    textButtonActive: {
        paddingLeft: 10,
        fontSize: 20,
        color: "black", 
    }
  });