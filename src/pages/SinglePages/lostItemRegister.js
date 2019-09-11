import React, {Component} from 'React';
import { View, Text } from 'react-native';

export default class LostItemRegister extends Component{

    static navigationOptions = {
        title: 'Perfil',
    }
    
    render()
    {
        return(
            <Text>Página de cadastro de itens perdidos</Text>
        )
    }
}