import React, { Component } from 'react';
import { View, Text, Button, Dimensions, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Container, Content, Footer, Picker, Icon, Item, Label } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class StepTwo extends Component{
    
    constructor(props){
        alert("Entrou no step 2");
        console.log("AAAAA");
    }

    render()
    {
        return(
            <View style={{backgroundColor: "red"}}>
                <Text>Passo Dois</Text>
            </View>
        )
    }

}