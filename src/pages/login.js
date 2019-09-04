import React, {Component} from 'React';
const Logo = require("../../assets/icon.png")
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';
import { TextInput } from 'react-native-gesture-handler';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Login extends Component{
    
    static navigationOptions = {
        header: null,
    }
    
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <KeyboardAvoidingView behavior="position" style={{flex:1}}>
                        <Form style={styles.content}>
                            <Image source={Logo} style={{alignSelf: 'center'}}/>
                            <Item rounded  style={styles.white}>
                                <Input placeholder='Usuário' placeholderTextColor="#b3b3b3"/>
                            </Item>
                            <Item rounded style={styles.white}>
                                <Input secureTextEntry={true} placeholder='Senha' placeholderTextColor="#b3b3b3"/>
                            </Item>
                            <View style={{flexDirection: "row"}}>
                                <Button rounded style={styles.button}>
                                    <Text style={{color: "#FFF"}}>Entrar</Text>
                                </Button>
                                <Button transparent>
                                    <Text style={{color: "#FFF"}}>Cadastrar-se</Text>
                                </Button>
                            </View>
                        </Form>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#059F9F',
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
        flex: 1,
        marginTop: (SCREEN_HEIGHT/4) - 50,
        height: 360,
        width: 250,
        justifyContent: "space-around",
    },
    button: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#50A083",
        marginRight: 10,
    },
    white: {
        backgroundColor: "#FFF",
    }
  });