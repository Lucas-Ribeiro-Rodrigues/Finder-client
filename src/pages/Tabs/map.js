import React, { Component } from 'React';
import { Dimensions, Text , View} from 'react-native';
import MyFooter from '../../components/MyFooter';
import { Container, Content } from 'native-base';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../../assets/icon.png");

export default class Map extends Component{
    render()
    {
        const {navigate} = this.props.navigation;
        return(
            <Container>
                <Content>
                    <View>
                        <Text>Map page</Text>
                    </View>
                </Content>                
                <MyFooter navigation={this.props.navigation}/>
            </Container>
        )
    }
}