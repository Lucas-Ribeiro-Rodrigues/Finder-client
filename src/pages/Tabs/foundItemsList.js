import React, {Component} from 'React';
import { View, Text } from 'react-native';

export default class FoundItemsList extends Component{

    static navigationOptions = {
        title: 'Itens achados',
    }

    render()
    {
        return(
            <Text>Página de itens achados</Text>
        )
    }
}