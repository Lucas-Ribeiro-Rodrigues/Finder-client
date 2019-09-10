import React, {Component} from 'React';
import { View, Text } from 'react-native';
import MyFooter from '../../components/MyFooter'; 
import { Container, Content } from 'native-base';
export default class Profile extends Component{

    render()
    {
        return(
            <Container>
                <Content>
                    <Text>Página de perfil</Text>
                </Content>
                <MyFooter navigation = {this.props.navigation}/>
            </Container>
        )
    }
}