import React, {Component} from 'React';
import { View, Text } from 'react-native';

export default class Profile extends Component{

    static navigationOptions = {
        title: 'Perfil',
    }
    
    render()
    {
        return(
            <Text>Página de perfil</Text>
        )
    }
}