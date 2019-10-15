import React, {Component} from 'React';
import { View, Text, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Card, CardItem, Body} from 'native-base';

export default class ItemsList extends Component{
    constructor(props){
        super(props);
    }

    generateList = () => {
        let itens = this.props.utils.items;
        var i = 0;
        let list;
        if (itens){
            list = itens.map(item => {
                return (
                    <TouchableOpacity key={i} buttonIndex={i++} onPress={()=>this.props.utils.onPressHandler(item)}>
                        <Card>
                            <CardItem>
                                <Body>
                                    <Text>Item: {item.Subcategory? item.Subcategory: "Indefinido"}</Text>
                                    <Text>Categoria: {item.Category? item.Category: "Indefinido"}</Text>
                                </Body>
                            </CardItem>
                        </Card>
                    </TouchableOpacity>)
            });
        }

        return list;
    }

    render()
    {
        //listar itens perdidos
        const itens = this.generateList();
        return(
            <View>
                {itens}
            </View>
        )
    }
}