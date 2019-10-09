import React, {Component} from 'React';
import { View, Text } from 'react-native';

export default class ItemDetails extends Component{
    constructor(props){
        super(props);
        
    }

    render()
    {

        return(
            <View>
                <Text>Item: {this.props.utils.item.Subcategory}</Text>
                <Text>Detalhes: {this.props.utils.item.Details}</Text>
            </View>
        )
    }
}