import React, { Component } from 'React';
import { Dimensions, Text , View} from 'react-native';
import MyFooter from '../main';
import { Container, Content, Fab, Icon } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../../assets/icon.png");

export default class Map extends Component{
    
    static navigationOptions = {
        title: 'Mapa',
    }

    render()
    {
        return(
            <View>
                <Text>Map page</Text>
            </View>
        )
    }
}