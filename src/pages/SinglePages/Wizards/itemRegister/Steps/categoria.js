import React, { Component } from 'react';
import { View, Text, Button, Dimensions } from 'react-native';
import { Container, Content, Footer, Picker, Icon, Item, Label } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Categoria extends Component{

    state = {valid: false, selectedItemValue: ""}

    constructor(props)
    {
        super(props);
    }

    onValueChangeHandler = (itemValue, itemIndex) => {
        let valid;

        if(itemIndex > 0)
            valid = true;
        else
            valid = false;

        this.setState({selectedItemValue: itemValue, valid: valid});
    }

    nextPreprocess(){
        this.props.saveState(0,{key:'value'})
        this.props.nextFn()
      }
    
      render()
      {
          const {navigate} = this.props.navigation;
          return(
            <Container style={{height: SCREEN_HEIGHT}}>
                <Content contentContainerStyle={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
                    <Item picker fixedLabel>
                    <Label>Tipo do item</Label>
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
                <Footer>
                    <Button title="Voltar"
                            onPress={() => navigate("Main")}/>
                    <Button title="Proximo"
                            onPress={this.nextPreprocess}
                            enabled={this.state.valid}/>
                </Footer>
            </Container>
          )
      }
}

