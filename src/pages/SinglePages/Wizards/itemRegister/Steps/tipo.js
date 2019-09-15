import React, { Component } from 'react';
import { Picker, View, Text, Footer } from 'react-native';
import { NavigationEvents } from 'react-navigation';

export default class StepOne extends Component{

    state = {valid: false, selectedItemValue: ""}

    constructor(props)
    {
        super(props);
        console.log(props);
    }

    onValueChangeHandler(itemValue, itemIndex){
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
            <View>
                <Text>Tipo do item</Text>
                <Picker
                selectedValue={this.state.language}
                style={{height: 50, width: 100}}
                onValueChange={(itemValue, itemIndex) =>
                this.setState({language: itemValue})
                }>
                    <Picker.Item label="Selecione..."/>
                    <Picker.Item label="Eletrônico" value="Eletronico" />
                    <Picker.Item label="Documento" value="Documento" />
                    <Picker.Item label="Animal" value="Animal" />
                </Picker>
                <Footer>
                    <Button title="Voltar"
                            onPress={() => navigate("Main")}/>
                    <Button title="Proximo"
                            onPress={() => navigate("Main")}
                            enabled={this.state.valid}/>
                </Footer>
            </View>
          )
      }
}

