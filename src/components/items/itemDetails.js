import React, {Component} from 'React';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Thumbnail, Text, Button, Icon, Left, Body, Right } from 'native-base';

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        
    }

    render()
    {

        return(
            <View>
                <Card>
                    <CardItem>
                        <Left>
                            <Body>
                                <Text>NativeBase</Text>
                                <Text note>GeekyAnts</Text>
                            </Body>
                        </Left>
                    </CardItem>

                    <CardItem cardBody>
                        <Image source={{uri: 'Image URL'}} style={{height: 200, width: null, flex: 1}}/>
                    </CardItem>
                    <Text>Item: {this.props.utils.item.Subcategory}</Text>
                    <Text>Detalhes: {this.props.utils.item.Details}</Text>
                </Card>
            </View>
        )
    }
}