import React, {Component} from 'React';
import {Dimensions, Text} from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../assets/icon.png");

export default class Map extends Component{
    render()
    {
        const {navigation} = this.props;
        alert(navigation.getParam('name', {}));
        return(
            <Text>Hello</Text>
        )
    }
}