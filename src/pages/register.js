import React, {Component} from 'React';
const Logo = require("../../assets/icon.png")
import {StyleSheet, View, Text, Image, KeyboardAvoidingView, Dimensions} from 'react-native';
import { Container, Header, Content, Form, Item, Label, Input, Button } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;

export default class Register extends Component {
    
    static navigationOptions = {
        header: null,
    }
    
    render(){
        return(
            <Container style={styles.container}>
                <Content>
                    <KeyboardAvoidingView behavior="padding" style={{flex: 1}}>
                    <Form style={styles.content}>
                        <Image source={Logo} style={{alignSelf: 'center'}}/>
                        <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                            <Item rounded  style={styles.whiteWithMarginRight}>
                                <Input placeholder='nome' placeholderTextColor="#b3b3b3"/>
                            </Item>
                            <Item rounded  style={styles.white}>
                                <Input placeholder='sobrenome' placeholderTextColor="#b3b3b3"/>
                            </Item>
                        </View>
                        <Item rounded  style={styles.white}>
                            <Input placeholder='email' placeholderTextColor="#b3b3b3"/>
                        </Item>
                        <View style={{flexDirection: "row"}}>
                            <Item rounded  style={styles.whiteWithMarginRight}>
                                <Input placeholder='senha' placeholderTextColor="#b3b3b3"/>
                            </Item>
                            <Item rounded  style={styles.white}>
                                <Input placeholder='confirme a senha' placeholderTextColor="#b3b3b3"/>
                            </Item>
                        </View>
                        <Button rounded style={styles.button}>
                            <Text style={{color: "#FFF"}}>Cadastrar</Text>
                        </Button>
                    </Form>
                    </KeyboardAvoidingView>
                </Content>
            </Container>
        )
    }
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#059F9F',
      flexDirection: "column",
      alignItems: "center",
    },
    content: {
        flex: 1,
        justifyContent: "space-around",
        marginTop: 80,
        minHeight: 500,
        width: SCREEN_WIDTH - 15,
    },
    button: {
        flex: 1,
        flexDirection: "row",
        backgroundColor: "#50A083",
    },
    white: {
        flex: 1,
        maxHeight: 50,
        backgroundColor: "#FFF",
    },
    whiteWithMarginRight: {
        flex: 1,
        maxHeight: 50,
        marginRight: 20,
        backgroundColor: "#FFF",
    }
  });