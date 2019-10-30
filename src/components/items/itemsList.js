import React, {Component} from 'React';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Body, Card, CardItem, Container, Content, Header, ListItem, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';



export default class ItemsList extends Component{
    constructor(props){
        super(props);
        this.icons = {
            "Cartões"   : "credit-card",
            "Vestuário" : "female",
            "Documento" : "vcard",
            "Animal"    : "bug",
            "Eletronic" : "desktop",
            "Acessórios" : "headphones",
        }
    }

    generateList = () => {
        let itens = this.props.utils.items;
        var i = 0;
        let list;
        if (itens){
            list = itens.map((item, index) => {
                return (
                    <Card key={index}>
                        <ListItem icon onPress={()=>this.props.utils.onPressHandler(item)}>
                        
                            <Left >
                                <Icon active name={this.icons[item.Category]} size={25} color="#999" />
                            </Left>
                            <Body>
                                <Text>Item: {item.Subcategory? item.Subcategory: "Indefinido"}</Text>
                                <Text>Categoria: {item.Category? item.Category: "Indefinido"}</Text>
                            </Body>
                            
                        </ListItem>
                        
                    </Card>)
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