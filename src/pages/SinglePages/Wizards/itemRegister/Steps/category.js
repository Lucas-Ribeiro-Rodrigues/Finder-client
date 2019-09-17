import React, { Component } from 'react';
import { View, Text, Button, Dimensions, TouchableOpacity, StyleSheet } from 'react-native';
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
            invalid = false;
        else
            invalid = true;

        this.setState({selectedItemValue: itemValue, invalid: invalid});
    }

    nextPreprocess = () => {
        this.props.saveState(0,{category:this.state.selectedItemValue})
        this.props.nextFn()
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
                            <Picker.Item label="Eletrônico" value="Eletronico" />
                            <Picker.Item label="Documento" value="Documento" />
                            <Picker.Item label="Animal" value="Animal" />
                        </Picker>
                    </Item>
                </Content>
                <Footer style={{backgroundColor: "#059F9F", flexDirection: "row", justifyContent: "flex-start"}}>
                    <TouchableOpacity 
                                    onPress={() => navigate("Main")}
                                    color="#059F9F"
                                    style={styles.buttons}>
                        <Text style={styles.buttonsText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                                    onPress={this.nextPreprocess}
                                    disabled={this.state.invalid}
                                    style={styles.buttons}>
                        <Text style={styles.buttonsText}>Próximo</Text>
                    </TouchableOpacity>
                </Footer>
            </Container>
          )
      }
}

const styles = StyleSheet.create({
    buttons: {
        width: (SCREEN_WIDTH/2) -10,
        alignItems: "center",
        justifyContent: "center",
    },
    buttonsText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "white"
    }
})