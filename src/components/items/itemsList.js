import React, {Component} from 'React';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import { Body, Card, CardItem, Container, Content, Header, ListItem, Left, Right} from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';


<<<<<<< HEAD
//const subcat = require("../../../assets/subcategory/");
=======
>>>>>>> 042b17eec0af38515e3875dbd52909d07e1d63d9

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
            list = itens.map(item => {
                return (
                    <TouchableOpacity key={i} buttonIndex={i++} onPress={()=>this.props.utils.onPressHandler(item)}>
                        <Card>
<<<<<<< HEAD
                            <CardItem>
                                {/*<Thumbnail source={{uri:"../../../assets/subcategory/iphone11.jpg"}} />*/}

=======
                            <ListItem icon>
                                <Left>
                                    <Icon active name={this.icons[item.Category]} size={25} color="#999" />
                                </Left>
>>>>>>> 042b17eec0af38515e3875dbd52909d07e1d63d9
                                <Body>
                                    <Text>Item: {item.Subcategory? item.Subcategory: "Indefinido"}</Text>
                                    <Text>Categoria: {item.Category? item.Category: "Indefinido"}</Text>
                                </Body>
                            </ListItem>
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