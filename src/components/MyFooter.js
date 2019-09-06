import React, { Component } from "React";
import { Text, StyleSheet }      from "react-native"
import { Footer, FooterTab, Button, Icon, Image} from "native-base";

export default class MyFooter extends Component{
    static navigationOptions = {
        footerTintColor: "#059F9F",
    }
    render()
    {
        return(
        <Footer>
            <FooterTab style={styles.footer}>
                <Button vertical>
                    <Icon name="compass" />
                    <Text style={styles.text_white}>Mapa</Text>
                </Button>
                <Button vertical>
                    <Icon name="ios-happy"/>
                    <Text style={styles.text_white}>Achados</Text>
                </Button>
                <Button vertical active>
                    <Icon active name="md-search" />
                    <Text style={styles.text_white}>Perdidos</Text>
                </Button>
                <Button vertical>
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
    text_white: {
        color: "#FFF",
    }
})