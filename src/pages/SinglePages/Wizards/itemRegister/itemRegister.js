import React, { Component }                                         from "react";
import { StyleSheet, Dimensions, TouchableOpacity, Text, Alert }    from 'react-native'
import { Container, Content, Footer }                               from 'native-base';
import MultipleChoiceStepGenerator                                  from './Steps/multipleChoiceStepGenerator';
import TextInputStepGenerator                                       from './Steps/textInputStepGenerator';
import ImagePickerStepGenerator                                     from './Steps/imagePickerStepGenerator';
import stepsJson                                                    from './stepsInfo.json';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class ItemRegister extends Component{

    constructor(props){
        super(props);
        this.initAttributes();
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
        this.isTextArea             = false;
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
        genericQuestions["Location"] = {
            "Type"  : "MapLocation",
            "Label" : "Local onde perdeu"
        }

        this.questions = Object.assign(this.questions, genericQuestions);
    }

    getActualQuestion(stepContent, category, actualStep){
        if(!this.questions) // questions == undefined
        {
            console.log(category)
            this.questions = stepContent[category];
            this.addGenericQuestions();
            delete this.questions["Label"];
        }
        this.actualQuestionName = Object.keys(this.questions)[actualStep];
        this.setState({actualStep: actualStep});
        return this.questions[this.actualQuestionName];
    }

    getQuestionOptions(actualQuestion, actualQuestionName)
    {
        return actualQuestion["Options"];
    }

    nextPreprocess = () => {
        if(!this.category)
            this.category = this.categories[this.step.state.value];

        this.handleNewAnswer(this.state.answers, this.actualQuestionName, this.step.state.value, this.state.actualStep++);

        let actualQuestion = this.getActualQuestion(this.stepContent, this.category, this.state.actualStep);
        
        this.stepLabel = actualQuestion["Label"]
        this.props.navigation.setParams({stepLabel: this.stepLabel});

        switch(actualQuestion["Type"])
        {
            case "MultipleChoice": {
                this.ActualStep = MultipleChoiceStepGenerator;
                this.actualQuestionOptions  = this.getQuestionOptions(actualQuestion, this.actualQuestionName);
                break;
            }
            case "TextInput": {
                this.ActualStep = TextInputStepGenerator;
                this.isTextArea = false;
                break;
            }
            case "TextArea": {
                this.ActualStep = TextInputStepGenerator;
                this.isTextArea = true;
                break;
            }
            case "ImagePicker": {
                this.ActualStep = ImagePickerStepGenerator;
                break;
            }
        }

        actualQuestion["Name"] = this.actualQuestionName;
        this.steps.push(actualQuestion);
    }

    backButtonHandler = () => {
        this.steps.pop();

        if(this.steps.length === 0)
        {
            const {navigate} = this.props.navigation;
            Alert.alert("Tem certeza?", 
                        "Você perderá todos os dados colocados sobre o item até agora e voltará para a página principal",
                        [
                            {text: "OK", onPress: () => navigate("Main")},
                            {text: "Cancelar", style: "cancel"}
                        ], {cancelable: true});
        }
        else
        {
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
                    break;
                }
                case "TextInput": {
                    this.ActualStep = TextInputStepGenerator;
                    this.isTextArea = false;
                    break;
                }
                case "TextArea": {
                    this.ActualStep = TextInputStepGenerator;
                    this.isTextArea = true;
                }
                case "ImagePicker": {
                    this.ActualStep = ImagePickerStepGenerator;
                }
            }
            this.stepLabel = actualStepObj["Label"];
            this.actualQuestionOptions = actualStepObj["Options"];
            
            let answers = this.state.answers;
            delete answers[this.actualQuestionName];

            this.actualQuestionName = actualStepObj["Name"];
            this.props.navigation.setParams({stepLabel: this.stepLabel});
            this.setState({actualStep: actualStep, answers: answers});
        }
    }

    render(){
        return(
            <Container contentContainerStyle={{flex: 1}}>
                <Content contentContainerStyle={{flex: 1}}>
                    <this.ActualStep 
                        ref         ={e => this.step = e} 
                        options     ={this.actualQuestionOptions}
                        isTextArea  ={this.isTextArea}/>
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