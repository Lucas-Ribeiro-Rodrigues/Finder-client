import React, { Component } from 'react';
import { View, Text, Button, Dimensions, TouchableOpacity, StyleSheet, Alert } from 'react-native';
import { Container, Content, Footer, Picker, Icon, Item, Label } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Category extends Component{

    state = {invalid: true, selectedItemValue: ""}

    constructor(props)
    {
        super(props);
    }

    onValueChangeHandler = (itemValue, itemIndex) => {
        let invalid;

        if(itemIndex > 0)
        {
            invalid = false;
        }
        else
        {
            invalid = true;
        }

        this.setState({selectedItemValue: itemValue, invalid: invalid});
    }

    nextPreprocess = () => {
        this.props.saveState(0,{category:this.state.selectedItemValue})
        this.props.nextFn()
    }
    
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
        <Container style={{height: SCREEN_HEIGHT}}>
            <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                <Item picker fixedLabel style={{width: SCREEN_WIDTH - 30}}>
                    <Picker
                    mode="dropdown"
                    iosIcon={<Icon name="arrow-down" />}
                    placeholder="Tipo"
                    placeholderStyle={{ color: "#bfc6ea" }}
                    placeholderIconColor="#007aff"
                    selectedValue={this.state.selectedItemValue}
                    style={{height: 50}}
                    onValueChange={this.onValueChangeHandler}>
                        <Picker.Item label="Categoria" value="Categoria"/>
                        <Picker.Item label="Eletrônico" value="Eletronico"/>
                        <Picker.Item label="Documento" value="Documento"/>
                        <Picker.Item label="Animal" value="Animal"/>
                        <Picker.Item label="Vestuário" value="Vestuario"/>
                        <Picker.Item label="Acessórios" value="Acessorios"/>
                        <Picker.Item label="Cartões" value="Cartoes"/>
                        <Picker.Item label="Outros" value="Outros"/>
                    </Picker>
                </Item>
            </Content>
            <Footer style={{backgroundColor: "#059F9F", flexDirection: "row", justifyContent: "flex-start"}}>
                <TouchableOpacity 
                                onPress={this.backButtonHandler}
                                color="#059F9F"
                                style={styles.buttonEnabled}>
                    <Text style={styles.buttonEnabledText}>Voltar</Text>
                </TouchableOpacity>
                <TouchableOpacity 
                                onPress={this.nextPreprocess}
                                disabled={this.state.invalid}
                                style={(!this.state.invalid ? styles.buttonEnabled: styles.buttonDisabled)}
                                ref={e => this.buttonNext = e}>
                    <Text style={(!this.state.invalid ? styles.buttonEnabledText: styles.buttonDisabledText)}>Próximo</Text>
                </TouchableOpacity>
            </Footer>
        </Container>
        )
    }
}

const styles = StyleSheet.create({
    buttonEnabled: {
        width: (SCREEN_WIDTH/2),
        alignItems: "center",
        justifyContent: "center",
    },
    buttonEnabledText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    },
    buttonDisabled: {
        width: (SCREEN_WIDTH/2),
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#059494"
    },
    buttonDisabledText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e6e6e6",
    }
})