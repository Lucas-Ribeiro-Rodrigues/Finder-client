import React, { Component } from "React";
import { Text, StyleSheet }      from "react-native"
import { Footer, FooterTab, Button, Icon, Image} from "native-base";

export default class MyFooter extends Component{

    static navigationOptions = {
        title: 'Mapa',
    }

    state = {btnSelected: 1}
    
    render(){
        const {navigate} = this.props.navigation;             
        return(
        <Footer>
            <FooterTab style={styles.footer} >
                <Button vertical 
                        onPress = {() => {this.setState({btnSelected: 1})}}
                        style={(this.state.btnSelected== 1)?styles.footerButtonSelected:styles.footer}>
                    <Icon name="compass"/>
                    <Text style={styles.text_white}>Mapa</Text>
                </Button>
                <Button vertical 
                        onPress = {() => {this.setState({btnSelected: 2})}}
                        style={(this.state.btnSelected== 2)?styles.footerButtonSelected:styles.footer}>
                    <Icon name="ios-happy"/>
                    <Text style={styles.text_white}>Achados</Text>
                </Button>
                <Button vertical active 
                        onPress = {() => this.setState({btnSelected: 3})}
                        style = {(this.state.btnSelected== 3)?styles.footerButtonSelected:styles.footer}> 
                    <Icon active name="md-search" />
                    <Text style={styles.text_white}>Perdidos</Text>
                </Button>
                <Button vertical
                        onPress = {() => {this.setState({btnSelected: 4}); navigate('Profile')}}
                        style = {(this.state.btnSelected== 4)?styles.footerButtonSelected:styles.footer}>
                    <Icon name="person"/>
                    <Text style={styles.text_white}>Perfil</Text>
                </Button>
            </FooterTab>
        </Footer>
        )
    }
}

const styles = StyleSheet.create({
    footer: {
        backgroundColor: "#059F9F",
    },
    footerButtonSelected: {
        backgroundColor: '#1f8686',
    },
    text_white: {
        color: "#FFF",
    }
})