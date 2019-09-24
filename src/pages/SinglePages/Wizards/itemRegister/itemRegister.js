import React, { Component }                                 from "react";
import  { StyleSheet, Dimensions, TouchableOpacity, Text }  from 'react-native'
import { Container, Content, Footer }                       from 'native-base';
import Category                                             from './Steps/category';
import MultipleChoiceStepGenerator                          from './Steps/multipleChoiceStepGenerator';
import TextInputStepGenerator                               from './Steps/textInputStepGenerator';
import stepsJson                                            from './stepsInfo.json';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ItemRegister extends Component{

    constructor(props){
        super(props);
        this.ActualStep =  MultipleChoiceStepGenerator;
        this.actualQuestionName   = "Category";
        this.stepContent = stepsJson[this.actualQuestionName];
        this.actualQuestionOptions = Object.keys(this.stepContent);
    }

    state = {invalid:false, actualStep: -1, answers: {}};

    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;

        return {
                title: (state.params.stepLabel ? state.params.stepLabel : 'Categoria'),
                headerLayoutPreset: 'center' | 'left',
                headerTitleStyle: {
                    flex: 1,
                    textAlign: "center",
                    alignSelf: "center",
                    justifyContent: "center",
                },
                headerStyle: {
                    backgroundColor: '#059F9F',
                },
                headerTintColor: '#FFF',
                headerLeft:null,
        };
      };

    handleNewAnswer = (answers, actualQuestionName, selectedItemValue, actualStep) => {
        answers[actualQuestionName] = selectedItemValue;
        this.setState({
            actualStep: actualStep,
            answers: answers
        });
    }

    getActualQuestion(questions, stepContent, category, actualQuestionName, actualStep){
        if(!questions) // questions == undefined
        {
            questions = stepContent[category];
        }
        this.actualQuestionName = Object.keys(questions)[actualStep];
        this.setState({actualStep: actualStep});
        return questions[this.actualQuestionName];
    }

    getQuestionOptions(actualQuestion, actualQuestionName)
    {
        return actualQuestion["Options"];
    }

    nextPreprocess = () => {
        if(!this.category)
            this.category = this.step.state.selectedItemValue;

        
        this.handleNewAnswer(this.state.answers, this.actualQuestionName, this.step.state.selectedItemValue, this.state.actualStep++);

        let actualQuestion = this.getActualQuestion(this.questions, this.stepContent, this.category, this.actualQuestionName, this.state.actualStep);
        this.props.navigation.setParams({stepLabel: actualQuestion["Label"]});
        console.log(this.state.answers);
        if(actualQuestion["Type"] === "MultipleChoice")
        {
            this.actualQuestionOptions  = this.getQuestionOptions(actualQuestion, this.actualQuestionName);
            this.ActualStep = MultipleChoiceStepGenerator;
        }
        else
        {
            this.ActualStep = TextInputStepGenerator;
        }
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

    render(){
        return(
            <Container contentContainerStyle={{flex: 1}}>
                <Content contentContainerStyle={{flex: 1}}>
                    <this.ActualStep ref={e => this.step = e} options={this.actualQuestionOptions}/>
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
                                    style={styles.buttonEnabled}
                                    ref={e => this.buttonNext = e}>
                        <Text style={styles.buttonEnabledText}>Próximo</Text>
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
        flex: 1,
        fontSize: 20,
        alignContent: "center",
        color: "white", 
        fontWeight: "bold"
    }
})