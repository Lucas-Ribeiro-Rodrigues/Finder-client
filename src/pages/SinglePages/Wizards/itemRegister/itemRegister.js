import React, { Component }                                                 from "react";
import { StyleSheet, Dimensions, TouchableOpacity, 
        Text, Alert, Animated, BackHandler, Platform }                      from 'react-native'
import { Container, Content, Footer }                                       from 'native-base';
import MultipleChoiceStepGenerator                                          from './Steps/multipleChoiceStepGenerator';
import TextInputStepGenerator                                               from './Steps/textInputStepGenerator';
import ImagePickerStepGenerator                                             from './Steps/imagePickerStepGenerator';
import MapLocationStepGenerator                                             from './Steps/mapLocationStepGenerator';
import DatePickerStepGenerator                                              from './Steps/datePickerStepGenerator';
import stepsJson                                                            from './stepsInfo.json';
import {postItem}                                                           from '../../../../../networking/API';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ItemRegister extends Component{

    state = {invalid:false, actualStep: -1, answers: {}, isLastStep: false, x: new Animated.Value(0)};

    constructor(props){
        super(props);
        this.initAttributes();
        if(Platform.OS === 'android')
            BackHandler.addEventListener('hardwareBackPress', this.exit);
    }

    componentDidMount()
    {
        let {answers} = this.state;
        answers["Situation"] = this.props.navigation.state.params.situation;
        answers["User"] = this.props.navigation.state.params.email;
        this.setState({answers: answers});
    }

    initOptions()
    {
        this.categories = [];
        let ret = [];
        let objectNames = Object.keys(this.stepContent);
        for(const name of objectNames)
        {
            ret.push(this.stepContent[name]["Label"]);
            this.categories[this.stepContent[name]["Label"]] = name;
        }
        return ret;
    }

    initAttributes()
    {
        this.ActualStep             =  MultipleChoiceStepGenerator;
        this.actualQuestionName     = "Category";
        this.stepLabel              = "Categoria"
        this.stepContent            = stepsJson[this.actualQuestionName];
        this.actualQuestionOptions  = this.initOptions();
        this.steps                  = [{
            "Type"      :   "MultipleChoice",
            "Options"   :   this.actualQuestionOptions,
            "Label"     :   this.stepLabel,
            "Name"      :   this.actualQuestionName,
        }];
        this.stepUtils = { options : this.actualQuestionOptions , isFirstStep: true}
    }

    shouldComponentUpdate()
    {
        return Object.keys(this.stepUtils).length !== 0 && this.stepUtils.constructor === Object;
    }

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

    handleNewAnswer = (answers, actualQuestionName, value, actualStep) => {
        answers[actualQuestionName] = value;
        this.setState({
            actualStep: actualStep,
            answers: answers
        });
    }

    addGenericQuestions()
    {
        let genericQuestions = {};

        genericQuestions["Details"] = {
            "Type"  : "TextArea",
            "Label" : "Detalhes"
        }
        genericQuestions["Image"] = {
            "Type"  : "ImagePicker",
            "Label" : "Foto"
        }
        genericQuestions["Date"] = {
            "Type"  : "DatePicker",
            "Label" : "Data"
        }
        genericQuestions["Location"] = {
            "Type"  : "MapLocation",
            "Label" : "Local onde perdeu"
        }

        this.questions = Object.assign(this.questions, genericQuestions);
    }

    getActualQuestion(stepContent, category, actualStep){
        if(!this.questions) // questions == undefined
        {
            this.questions = Object.assign({}, stepContent[category]); // copiar o objeto
            this.addGenericQuestions();
            delete this.questions["Label"];
            this.questionsLabel = Object.keys(this.questions);
        }
        this.actualQuestionName = this.questionsLabel[actualStep];
        this.setState({actualStep: actualStep});
        return this.questions[this.actualQuestionName];
    }

    getQuestionOptions(actualQuestion, actualQuestionName)
    {
        return actualQuestion["Options"];
    }

    animateSlideOut = (direction) =>
    {
        let finalValue;
        if(direction === "left")
        {
            finalValue = -SCREEN_WIDTH;
        }
        else
        {
            finalValue = SCREEN_WIDTH;
        }
        return new Promise(resolve => {
            let {x} = this.state;
            Animated.timing(x, {
                toValue: finalValue,
                duration: 300,
                useNativeDriver: true
            }).start();
            setTimeout(() => resolve(), 300);
        })
    }

    animateSlideIn = async(direction) =>
    {
        let initialValue;
        if(direction ==  "next")
            initialValue = SCREEN_WIDTH;
        else
            initialValue = -SCREEN_WIDTH;

        await this.setState({x: new Animated.Value(initialValue)});
        let {x} = this.state;
        Animated.timing(x, {
            toValue: 0,
            duration: 300,
            useNativeDriver: true
        }).start();
    }

    nextPreprocess = () => {
        this.animateSlideOut('left')
        .then(v => this.setNextStepConfig());
    }

    setNextStepConfig = () => {
        if(!this.category)
            this.category = this.categories[this.step.state.value];
        
        if(this.questionsLabel)
            if(this.questionsLabel.length - 2 == this.state.actualStep)
                this.setState({isLastStep: true});

        this.handleNewAnswer(this.state.answers, this.actualQuestionName, this.step.state.value, this.state.actualStep + 1);

        let actualQuestion = this.getActualQuestion(this.stepContent, this.category, this.state.actualStep);
        this.stepLabel = actualQuestion["Label"];
        let isFirstStep = this.state.actualStep == -1; 
        this.stepUtils = {};
        this.props.navigation.setParams({stepLabel: this.stepLabel});
        
        switch(actualQuestion["Type"])
        {
            case "MultipleChoice": {
                
                this.ActualStep = MultipleChoiceStepGenerator;
                this.actualQuestionOptions  =   this.getQuestionOptions(actualQuestion, this.actualQuestionName);
                this.stepUtils["options"]   =   this.actualQuestionOptions;  
                this.stepUtils["isFirstStep"]=  isFirstStep;
                break;
            }
            case "TextInput": {
                this.ActualStep = TextInputStepGenerator;
                this.stepUtils["isTextArea"] = false;
                break;
            }
            case "TextArea": {
                this.ActualStep = TextInputStepGenerator;
                this.stepUtils["isTextArea"] = true;
                break;
            }
            case "ImagePicker": {
                this.ActualStep = ImagePickerStepGenerator;
                this.stepUtils["isValidStep"] = true;
                break;
            }
            case "MapLocation": {
                this.ActualStep = MapLocationStepGenerator;
                this.stepUtils["isValidStep"] = true;
                break;
            }
            case "DatePicker": {
                this.ActualStep = DatePickerStepGenerator;
                this.stepUtils["message"] = "Selecione a data " + (this.state.answers.Situation === "Found" ? 'do achado':'da perda');
            }
        }
        this.stepUtils["direction"] = "next";
        actualQuestion["Name"] = this.actualQuestionName;
        this.steps.push(actualQuestion);
        this.setState({invalid: false});
    }

    previousPreprocess = () => {
        this.steps.pop();
        this.stepUtils = {};
        if(this.steps.length === 0)
        {
            this.exit();
        }
        else
        {
            this.animateSlideOut('right')
            .then(v => this.setPreviousStepConfig());
        }
    }

    setPreviousStepConfig = () => {
        let actualStep = this.state.actualStep;
        let actualStepObj = this.steps[actualStep];
        actualStep--;

        if(actualStep == -1)
        {
            this.category = undefined;
            this.questions = undefined;
        }

        switch(actualStepObj["Type"])
        {
            case "MultipleChoice": {
                this.ActualStep = MultipleChoiceStepGenerator;
                this.stepUtils["options"]   =   actualStepObj["Options"];  
                break;
            }
            case "TextInput": {
                this.ActualStep = TextInputStepGenerator;
                this.stepUtils["isTextArea"] = false;
                break;
            }
            case "TextArea": {
                this.ActualStep = TextInputStepGenerator;
                this.stepUtils["isTextArea"] = true;
                break;
            }
            case "ImagePicker": {
                this.ActualStep = ImagePickerStepGenerator;
                this.stepUtils["isValidStep"] = true;
                break;
            }
            case "MapLocation": {
                this.ActualStep = MapLocationStepGenerator;
                this.stepUtils["isValidStep"] = true;
                break;
            }
            case "DatePicker": {
                this.ActualStep = DatePickerStepGenerator;
                this.stepUtils["message"] = "Selecione a data " + (this.state.answers.Situation === "Found" ? 'do achado':'da perda');
            }
        }
        this.stepUtils["direction"] = "prev";
        this.stepLabel = actualStepObj["Label"];
        this.actualQuestionOptions = actualStepObj["Options"];
        
        let answers = this.state.answers;
        delete answers[this.actualQuestionName];

        this.actualQuestionName = actualStepObj["Name"];
        this.props.navigation.setParams({stepLabel: this.stepLabel});

        let isLastStep = this.state.isLastStep;
        if(isLastStep)
            isLastStep = !isLastStep;

        this.setState({actualStep: actualStep, answers: answers, isLastStep: isLastStep});
    }

    exit = () => {
        const {navigate} = this.props.navigation;
        Alert.alert("Tem certeza?", 
                    "Você perderá todos os dados colocados sobre o item até agora e voltará para a página principal",
                    [
                        {text: "OK", onPress: () => navigate("Main")},
                        {text: "Cancelar", style: "cancel"}
                    ], {cancelable: true});
        return true;
    }

    onFinish = () =>
    {
        this.handleNewAnswer(this.state.answers, this.actualQuestionName, this.step.state.value, this.state.actualStep);
        postItem(this.state.answers);
        alert("Item inserido");
        const {navigate} = this.props.navigation;
        navigate("Main");
    }

    render(){
        let {isLastStep} = this.state; 
        return(
            <Container contentContainerStyle={{flex: 1}}>
                <Content contentContainerStyle={{flex: 1}}>
                    <Animated.View
                        style={[{flex: 1}, {
                            transform: [
                              {
                                translateX: this.state.x
                              }
                            ]
                          }]}>
                        <this.ActualStep 
                            ref     =   {e => this.step = e} 
                            utils   =   {this.stepUtils}
                            animateSlideIn = {this.animateSlideIn}/>
                    </Animated.View>
                </Content>
                <Footer 
                    style={{backgroundColor: "#059F9F", flexDirection: "row", justifyContent: "flex-start"}}>
                    <TouchableOpacity 
                        onPress =   {this.previousPreprocess}
                        color   =   "#059F9F"
                        style   =   {styles.buttonEnabled}>
                        <Text style={styles.buttonEnabledText}>Voltar</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        onPress =   {isLastStep ? this.onFinish : this.nextPreprocess}
                        disabled=   {this.state.invalid}
                        style   =   {styles.buttonEnabled}
                        ref     =   {e => this.buttonNext = e}>
                        <Text style={styles.buttonEnabledText}>{isLastStep ? 'Enviar' : 'Próximo'}</Text>
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