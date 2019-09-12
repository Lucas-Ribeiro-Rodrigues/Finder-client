import React, {Component} from 'React';
import {StyleSheet, View, Image, KeyboardAvoidingView, Dimensions, Text, Keyboard} from 'react-native';
import { Container, Header, Content, Form, Item, Input, Button, Toast, Root } from 'native-base';
const Logo = require("../../../assets/icon.png")
const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
export default class LostItemRegister extends Component{
    
    static navigationOptions = {
        header: null,
    }

    render()
    {
        return(
            <Root>
                <Container style={styles.container}>
                    <Content>
                        <KeyboardAvoidingView 
                        behavior="position" 
                        style={{flex: 1}}>
                            <Form 
                            style={styles.content}>
                                <Image source={Logo}style={{alignSelf: 'center'}}/>
                                <View style={{flexDirection: "row", justifyContent: "space-between"}}>
                                    <Item rounded style={styles.whiteWithMarginRight}>
                                        <Input 
                                        placeholder='nome' 
                                        placeholderTextColor="#b3b3b3" 
                                        onChangeText = {value => this.setState({name: value})}/>
                                    </Item>
                                    <Item rounded style={styles.white}>
                                        <Input 
                                        placeholder='sobrenome' 
                                        placeholderTextColor="#b3b3b3" 
                                        onChangeText = {value => this.setState({surname: value})}/>
                                    </Item>
                                </View>
                                <Item rounded style={styles.white}>
                                    <Input 
                                    placeholder='email' 
                                    placeholderTextColor="#b3b3b3" 
                                    onChangeText = {value => this.setState({email: value})}/>
                                </Item>
                                <View style={{flexDirection: "row"}}>
                                    <Item rounded  style={styles.whiteWithMarginRight}>
                                        <Input 
                                        placeholder='senha' 
                                        placeholderTextColor="#b3b3b3" 
                                        secureTextEntry
                                        onChangeText = {value => this.setState({pass: value})}/>
                                    </Item>
                                    <Item rounded  style={styles.white} error={this.state.error} >
                                        <Input 
                                        placeholder='confirme a senha' 
                                        placeholderTextColor="#b3b3b3"
                                        secureTextEntry
                                        onChangeText = {value => {
                                                    this.setState({confirmPass: value});
                                                    if(value !== this.state.pass && value != "")
                                                        this.setState({error: true});
                                                    else
                                                        this.setState({error: false});
                                                }
                                            }/>
                                    </Item>
                                </View>
                                <Button rounded style={styles.button} onPress={() => {this.registerHandler(this.state.name, this.state.surname, this.state.email, this.state.pass, this.state.confirmPass)}}>
                                    <Text style={{color: "#FFF"}}>Cadastrar</Text>
                                </Button>
                            </Form>
                        </KeyboardAvoidingView>
                    </Content>
                </Container>
            </Root>
        )
    }
}