import MultiStep from 'react-native-multistep-wizard';
import React, { Component } from "react";
import { View, StyleSheet, Dimensions, TouchableOpacity, Text } from 'react-native'
import { Container, Content, Footer, Picker, Icon, Item, Label } from 'native-base';
import Category from './Steps/category'
/*import StepTwo from './StepTwo'
import StepThree from './StepThree'*/

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ItemRegister extends Component{

    constructor(props){
        super(props);
    }

    state = {invalid:false, selectedItemValue: '', actualStep: 1, stepTitle: 'Categoria'};

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
      
        return {
                headerTitle: <Text style={styles.titleText}>{state.params && state.params.stepTitle ? state.params.stepTitle : 'Categoria'}</Text>,
                headerStyle: {
                    backgroundColor: '#059F9F',
                },
                headerTintColor: '#FFF',
                headerLeft:null,
        };
      };

    finish(wizardState){
    }

    nextPreprocess = () => {
        this.stepProps.saveState(0,{category:this.props.selectedItemValue});
        let actualStep = this.state.actualStep++;
        this.setState({actualStep: actualStep});
        this.stepProps.nextFn();
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

    render(){

        const steps = [
            {name: 'Category', component: <Category 
                                                    navigation = {this.props.navigation} 
                                                    ref={e => this.stepProps = e.props} 
                                                    onValueChangeHandler={this.onValueChangeHandler} 
                                                    selectedItemValue={this.state.selectedItemValue}/>},
            /*{name: 'StepTwo', component: <StepTwo/>},
            {name: 'StepThree', component: <StepThree/>},*/
          ];
        return(
            <Container contentContainerStyle={{flex: 1}}>
                <Content contentContainerStyle={{flex: 1}}>
                    <MultiStep  
                            steps={steps} 
                            onFinish={this.finish}/>
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
        flexGrow: 2,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#059494"
    },
    buttonDisabledText: {
        fontSize: 24,
        fontWeight: "bold",
        color: "#e6e6e6",
    },
    titleText: {
        fontSize: 20,
        color: "white", 
        fontWeight: "bold"
    }
})