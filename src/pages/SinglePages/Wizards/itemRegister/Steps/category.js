import React, { Component } from 'react';
import { View, Text, Button, Dimensions, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Container, Content, Footer, Picker, Icon, Item, Label } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Category extends Component{

    constructor(props)
    {
        super(props);
    }

    state = {selectedItemValue: 'Eletronic', activeButton: 0};
    
    buttonPressHandler = (index, value) => {
        this.setState({activeButton: index, selectedItemValue: value});
    }

    render()
    {
        const active = this.state.buttonActive;
        return(
            <View style={{flex: 1}}>
            <TouchableOpacity 
                style={this.state.activeButton == 0 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(0, "Eletronic")}}>
                <Text 
                    style={(this.state.activeButton == 0 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Eletrônico
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={this.state.activeButton == 1 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(1, "Document")}}>
                <Text 
                    style={(this.state.activeButton == 1 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Documento
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={this.state.activeButton == 2 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(2, "Animal")}}>
                <Text 
                    style={(this.state.activeButton == 2 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Animal
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={this.state.activeButton == 3 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(3, "Clothing")}}>
                <Text 
                    style={(this.state.activeButton == 3 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Vestuário
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={this.state.activeButton == 4 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(4, "Acessories")}}>
                <Text 
                    style={(this.state.activeButton == 4 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Acessórios
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={this.state.activeButton == 5 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(5, "Cards")}}>
                <Text 
                    style={(this.state.activeButton == 5 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Cartões
                </Text>
            </TouchableOpacity>
            <TouchableOpacity 
                style={this.state.activeButton == 6 ? styles.buttonActive:styles.buttonNotActive} 
                onPress={() => {this.buttonPressHandler(6, "Others")}}>
                <Text 
                    style={(this.state.activeButton == 6 ? styles.textButtonActive:styles.textButtonNotActive)}>
                    Outros
                </Text>
            </TouchableOpacity>
            </View>
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