import React, {Component} from 'React';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import {Container, Content, Form, Item, Input, Button } from 'native-base';
import {userLogin} from "../../networking/API";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../assets/icon.png");

export default class Login extends Component{
    
    static navigationOptions = {
        header: null,
    }
    
    state = {email: '',password: ''};

    loginHandler(email, pass)
    {
        let response = userLogin(email, pass);
    }

    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <KeyboardAvoidingView behavior="position" style={{flex:1}}>
                        <Form style={styles.content}>
                            <Image source={Logo} style={{alignSelf: 'center'}}/>
                            <Item rounded  style={styles.white}>
                                <Input 
                                placeholder='Email' 
                                placeholderTextColor="#b3b3b3"
                                onChangeText={value => {this.setState({email:value})}}/>
                            </Item>
                            <Item rounded style={styles.white}>
                                <Input 
                                secureTextEntry 
                                placeholder='Senha' 
                                placeholderTextColor="#b3b3b3"
                                onChangeText={value => {this.setState({password: value})}}/>
                            </Item>
                            <View style={{flexDirection: "row"}}>
                                <Button 
                                rounded 
                                style={styles.button}
                                onPress={() => this.loginHandler(this.state.email, this.state.password)}>
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