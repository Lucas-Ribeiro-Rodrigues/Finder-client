import React, {Component} from 'React';
import { View, Text } from 'react-native';
import {getUserData} from '../../../networking/API';



export default class Profile extends Component{
    state = {userData: undefined};
    constructor(props){
        super(props);
        console.log('constructor');
        getUserData('adaw')
            .then(value => {
                this.setState({userData: value});
            })

    }

    render()
    {
        return(
            <View>
                <Text>Página de perfil</Text>
                <Text>Email: {this.state.userData? this.state.userData.Email:null}</Text>
                <Text>Nome: {this.state.userData? this.state.userData.Name:null}</Text>
            </View>
        )
    }
}