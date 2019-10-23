import React, {Component} from 'React';
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, Dimensions, Keyboard} from 'react-native';
import {Container, Content, Form, Item, Input, Button, Toast, Root } from 'native-base';
import {userLogin} from "../../../networking/API";

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../../assets/icon.png");

export default class Login extends Component{
    
    static navigationOptions = {
        header: null,
    }
    
    state = {email: '',password: ''};

    showToast()
    {
        Toast.show({
            text: 'Senha ou email incorreto',
            type: 'warning',
            style: {
                backgroundColor: '#52059f',
            }
        })
    }

    loginHandler(email, pass)
    {
        Keyboard.dismiss();
        const {navigate} = this.props.navigation; 

        if(this.state.name == "" || this.state.password == "")
        {
            this.showToast();
            return;
        }

        userLogin(email, pass)
        .then(value => {
                        if(value.Name != undefined) 
                            navigate('Main', {loggedUserEmail: value.Email});
                        else this.showToast();})
        .catch(error => this.showToast())
    }

    render(){
        const {navigate} = this.props.navigation;
        return(
            <Root>
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
                                    <Button transparent onPress = {() => navigate('Register')}>
                                        <Text style={{color: "#FFF"}}>Cadastrar-se</Text>
                                    </Button>
                                </View>
                            </Form>
                        </KeyboardAvoidingView>
                    </Content>
                </Container>
            </Root>
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
        marginTop: (SCREEN_HEIGHT/4) ,
        height: 360,
        width: 250,
        justifyContent: "space-around",
    },
    button: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#1f8686",
        marginRight: 10,
    },
    white: {
        backgroundColor: "#E0E0E0",
    }
  });