import React, {Component} from 'React';
const Logo = require("../../assets/icon.png")
import {StyleSheet, View, Text, Image} from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';

export default class Login extends Component{
    
    static navigationOptions = {
        header: null,
    }

    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <Form style={styles.content}>
                        <Image source={Logo} style={{alignSelf: 'center'}}/>
                        <Item rounded  style={styles.white}>
                            <Input placeholder='Usuário'/>
                        </Item>
                        <Item rounded style={styles.white}>
                            <Input placeholder='Senha'/>
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
        marginTop: 130,
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