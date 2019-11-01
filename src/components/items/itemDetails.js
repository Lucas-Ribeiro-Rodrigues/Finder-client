import React, {Component} from 'React';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body} from 'native-base';

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        
    }

    render()
    {

        return(
            <Container>
                <Content>
                    <Card style={{flex: 0}}>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text>{this.props.utils.item.Subcategory}</Text>
                                    <Text note>{this.props.utils.item.Category}</Text>
                                </Body>
                            </Left>
                        </CardItem>

                        <CardItem>
                            <Body>
                                <Image source={require('../../../assets/items/mali.jpeg')} style={{height: 200, width: 200, flex: 1}}/>
                                <Text>{this.props.utils.item.Details}</Text>
                            </Body>
                        </CardItem>

                        <CardItem>
                            <Left>

                                <Icon name="logo-github" />
                                <Text>30/10/2019</Text>

                            </Left>
                        </CardItem>
                        
                    </Card>
                </Content>
            </Container>
        )
    }
}