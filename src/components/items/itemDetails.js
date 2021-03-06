import React, {Component} from 'React';
import { View, Image } from 'react-native';
import { Container, Header, Content, Card, CardItem, Text, Button, Icon, Left, Body} from 'native-base';
import { Linking } from 'expo'

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
                            <Body>

                                <Image source={(this.props.utils.item.Image ? {uri: this.props.utils.item.Image} : require('../../../assets/question_mark.png'))} style={{height: 200, width: 200, flex: 1,  alignSelf: "center" }}/> 
                            </Body>
                        </CardItem>

                        <CardItem header>
                            <Body>
                                <Text style={{fontWeight: 'bold'}}>{this.props.utils.item.Subcategory}</Text>
                                <Text note>{this.props.utils.item.Category}</Text>
                            </Body>
                        </CardItem>
                    


                        <CardItem header button onPress={() => alert("leo.minoru@hotmail.com")}>
                        <Text>Informações de contato</Text>
                        </CardItem>
                        <CardItem button onPress={() => alert("mostrar no mapa")}>
                        <Body>
                            <Text>
                            Jardim Chapadão
                            </Text>
                        </Body>
                        </CardItem>
                        <CardItem footer button onPress={() => Linking.openURL('whatsapp://send?phone=+551999134-7510')}>
                        <Text>+55(19)99134-7510</Text>
                        </CardItem>


                        <CardItem>
                            <Left>

                                <Icon name="ios-calendar" />
                                <Text>{this.props.utils.item.Date}</Text>

                            </Left>
                        </CardItem>
                        
                    </Card>
                </Content>
            </Container>
        )
    }
}