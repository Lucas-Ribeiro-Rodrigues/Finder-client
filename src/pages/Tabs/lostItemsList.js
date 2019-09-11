import React, {Component} from 'React';
import { View, Text } from 'react-native';

export default class Profile extends Component{

    static navigationOptions = {
        title: 'Itens perdidos',
    }

    render()
    {
        return(
            <Text>Página de itens perdidos</Text>
        )
    }
}