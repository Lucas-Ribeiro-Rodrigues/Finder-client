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

    state = {selectedItemValue: ''};
    
    backButtonHandler = () => {
        const {navigate} = this.props.navigation;
        Alert.alert("Tem certeza?", 
                    "Você perderá todos os dados colocados sobre o item até agora e voltará para a página principal",
                    [
                        {text: "OK", onPress: () => navigate("Main")},
                        {text: "Cancelar", style: "cancel"}
                    ], {cancelable: true});
    }

    render()
    {
        const {navigate} = this.props.navigation;
        return(
            <Item picker fixedLabel style={{width: SCREEN_WIDTH - 30}}>
                <Picker
                mode="dropdown"
                iosIcon={<Icon name="arrow-down" />}
                placeholder="Tipo"
                placeholderStyle={{ color: "#bfc6ea" }}
                placeholderIconColor="#007aff"
                selectedValue={this.state.selectedItemValue}
                style={{height: 50}}
                onValueChange={(itemValue, itemIndex) => {this.props.onValueChangeHandler(itemValue, itemIndex); this.setState({selectedItemValue: itemValue})}}>
                    <Picker.Item label="Categoria" value="Category"/>
                    <Picker.Item label="Eletrônico" value="Eletronic"/>
                    <Picker.Item label="Documento" value="Document"/>
                    <Picker.Item label="Animal" value="Animal"/>
                    <Picker.Item label="Vestuário" value="Clothing"/>
                    <Picker.Item label="Acessórios" value="Acessories"/>
                    <Picker.Item label="Cartões" value="Cards"/>
                    <Picker.Item label="Outros" value="Outros"/>
                </Picker>
            </Item>
        )
    }
}