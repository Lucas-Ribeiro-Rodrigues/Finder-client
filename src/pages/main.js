import React, { Component } from "React";
import { Text, StyleSheet }      from "react-native"
import { Footer, FooterTab, Button, Icon, Container, Content, Fab} from "native-base";   
import Map              from './Tabs/map'; 
import FoundItemsList   from './Tabs/foundItemsList'; 
import LostItemsList    from './Tabs/lostItemsList'; 
import Profile          from './Tabs/profile';
import UserItemsList    from './Tabs/userItemsList';
import MapView from 'react-native-maps'

export default class Main extends Component{

    state = {btnSelected: 1, title: 'Mapa', active: false, loggedUserEmail: null}
    
    static navigationOptions = ({ navigation }) => {
        const { state } = navigation;
      
        return {
                title: `${state.params && state.params.title ? state.params.title : 'Mapa'}`,
                headerStyle: {
                    backgroundColor: '#059F9F',
                },
                headerTintColor: '#FFF',
        };
      };

    componentDidUpdate()
    {
        let {navigate} = this.props.navigation;
        if(!this.props.navigation.state.params.loggedUserEmail)
        {
            navigate("Login");
        }
        else
        {
            if(!this.state.loggedUserEmail)
                this.setState({loggedUserEmail:this.props.navigation.state.params.loggedUserEmail});
        }
    }

    render(){
        const {navigate} = this.props.navigation;
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
                SelectedTab = UserItemsList;
                break;
            case 5:
                SelectedTab = Profile;
                break;
        }       
        
        return(
        <Container>
            {this.state.btnSelected != 1 ? <Content>
                <SelectedTab email={this.state.loggedUserEmail}/>
            </Content>: <SelectedTab email={this.state.loggedUserEmail}/>}
            <Fab
                active = {this.state.active}
                direction="down"
                style={{ backgroundColor: '#059F9F' }}
                containerStyle={{  }}
                position="topRight"
                onPress={() => {this.setState({ active: !this.state.active });}}>
                <Icon 
                    type="FontAwesome" 
                    name="plus"/>
                {this.state.active? <Button style={{ backgroundColor: '#1f8686' }} onPress={() => navigate('ItemRegister', {navigation: this.props.navigation, situation: "Found", email: this.state.loggedUserEmail})}>
                    <Icon name="ios-happy"/>
                </Button>:null}
                {this.state.active? <Button style={{ backgroundColor: '#1f8686' }} onPress={() => navigate('ItemRegister', {navigation: this.props.navigation, situation: "Lost", email: this.state.loggedUserEmail})}>
                    <Icon name="md-search"/>
                </Button>:null}
            </Fab>
            <Footer>
                <FooterTab style={styles.footer} >
                    <Button vertical 
                            active={this.state.btnSelected == 1}
                            onPress = {() => {this.setState({btnSelected: 1}); this.props.navigation.setParams({title: 'Mapa'})}}
                            style={this.state.btnSelected== 1?styles.footerButtonSelected:styles.footer}>
                        <Icon name="compass"/>
                        <Text style={styles.text_white}>Mapa</Text>
                    </Button>
                    <Button vertical
                            active={this.state.btnSelected == 2} 
                            onPress = {() => {this.setState({btnSelected: 2}); this.props.navigation.setParams({title: 'Pagina de itens achados'})}}
                            style={this.state.btnSelected== 2?styles.footerButtonSelected:styles.footer}>
                        <Icon name="ios-happy"/>
                        <Text style={styles.text_white}>Achados</Text>
                    </Button>
                    <Button vertical 
                            active={this.state.btnSelected == 3}
                            onPress = {() => {this.setState({btnSelected: 3}); this.props.navigation.setParams({title: 'Pagina de itens perdidos'})}}
                            style = {this.state.btnSelected== 3?styles.footerButtonSelected:styles.footer}> 
                        <Icon active name="md-search" />
                        <Text style={styles.text_white}>Perdidos</Text>
                    </Button>
                    <Button vertical 
                            active={this.state.btnSelected == 4}
                            onPress = {() => {this.setState({btnSelected: 4}); this.props.navigation.setParams({title: 'Pagina de itens perdidos'})}}
                            style = {this.state.btnSelected== 4?styles.footerButtonSelected:styles.footer}> 
                        <Icon active name="md-locate" />
                        <Text style={styles.text_white}>Localizar</Text>
                    </Button>
                    <Button vertical
                            active={this.state.btnSelected == 5}
                            onPress = {() => {this.setState({btnSelected: 5}); this.props.navigation.setParams({title: 'Perfil'})}}
                            style = {this.state.btnSelected== 5?styles.footerButtonSelected:styles.footer}>
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