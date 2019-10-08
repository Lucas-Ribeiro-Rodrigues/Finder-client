import React, {Component} from 'React';
import { View, Text } from 'react-native';
import {getItems} from '../../../networking/API';

export default class LostItemsList extends Component{
    state = {lostItems: undefined};
    constructor(props){
        super(props);
        console.log('constructor');
        getItems('Lost')
            .then(value => {
                this.setState({lostItems: value});
            })

    }


    IdiomaticReactList(props) {
        if (props)
            return (
            <div>
                {props.map((item, index) => (
                <div>
                <Text>Item: {item? item.Subcategory:null}</Text>
                <Text>Marca: {item? item.Marca:null}</Text>
                </div>
                ))}
            </div>
            );
      }

    render()
    {
        return(
            <View>
                <Text>Lista de itens perdidos</Text>
                {/*(()=> {
                    if (this.state.lostItems)
                        for (item in this.state.lostItems){
                            return item
                        }
                    else
                        return null;
                    
                <Text>Item: {this.state.lostItems? this.state.lostItems[0].Category:null}</Text>  
                
            
                })()*/}
                
                {this.IdiomaticReactList(this.state.lostItems? this.state.lostItems.Category:null)}
                
               {/* <Text>Nome: {this.state.lostItems? this.state.userData.Name:null}</Text>*/}
            </View>
        )
    }
}