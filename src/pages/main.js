import React, { Component } from "React";
import { Text, StyleSheet }      from "react-native"
import { Footer, FooterTab, Button, Icon, Container, Content, Header, Title} from "native-base";
import Map              from './Tabs/map'; 
import FoundItemsList   from './Tabs/foundItemsList'; 
import LostItemsList    from './Tabs/lostItemsList'; 
import Profile          from './Tabs/profile';

export default class Main extends Component{

    state = {btnSelected: 1, title: 'Mapa'}
    
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
      
        return {
            title: `${state.params && state.params.title ? state.params.title : 'Mapa'}`,
        };
      };

    componentWillReceiveProps()
    {
        const title = this.state.title;
        
    }
    render(){
        let SelectedTab = null;
        switch(this.state.btnSelected)
        {
            case 1:
                SelectedTab = Map;
                break;
            case 2:
                SelectedTab = FoundItemsList;
                break;
            case 3:
                SelectedTab = LostItemsList;
                break;
            case 4:
                SelectedTab = Profile;
                break;
        }       

        return(
        <Container>
            <Content>
                <SelectedTab/>
            </Content>
            <Footer>
                <FooterTab style={styles.footer} >
                    <Button vertical 
                            onPress = {() => {this.setState({btnSelected: 1}); this.props.navigation.setParams({title: 'Mapa'})}}
                            style={(this.state.btnSelected== 1)?styles.footerButtonSelected:styles.footer}>
                        <Icon name="compass"/>
                        <Text style={styles.text_white}>Mapa</Text>
                    </Button>
                    <Button vertical 
                            onPress = {() => {this.setState({btnSelected: 2}); this.props.navigation.setParams({title: 'Pagina de itens achados'})}}
                            style={(this.state.btnSelected== 2)?styles.footerButtonSelected:styles.footer}>
                        <Icon name="ios-happy"/>
                        <Text style={styles.text_white}>Achados</Text>
                    </Button>
                    <Button vertical active 
                            onPress = {() => {this.setState({btnSelected: 3}); this.props.navigation.setParams({title: 'Pagina de itens perdidos'})}}
                            style = {(this.state.btnSelected== 3)?styles.footerButtonSelected:styles.footer}> 
                        <Icon active name="md-search" />
                        <Text style={styles.text_white}>Perdidos</Text>
                    </Button>
                    <Button vertical
                            onPress = {() => {this.setState({btnSelected: 4}); this.props.navigation.setParams({title: 'Perfil'})}}
                            style = {(this.state.btnSelected== 4)?styles.footerButtonSelected:styles.footer}>
                        <Icon name="person"/>
                        <Text style={styles.text_white}>Perfil</Text>
                    </Button>
                </FooterTab>
            </Footer>
        </Container>
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