import React, {Component} from 'React';
import { View, Text } from 'react-native';
import ItemDetails from '../../components/items/itemDetails';
import ItemsList from '../../components/items/itemsList';
import {getItemsBySituation} from '../../../networking/API';

export default class LostItemsList extends Component{
    state = {lostItems: undefined, details: undefined};
    constructor(props){
        super(props);
        getItemsBySituation('Lost')
            .then(value => {
                this.setState({lostItems: value});
            })
            .catch(err=> console.log(err))

    }

    showDetails = item => {
        //passar as infos do item
        this.setState({details:item});
    }

    

    render()
    {
        
        let utils = {};
        let Page;
        if (this.state.details){
            Page = ItemDetails;
            utils = {item : this.state.details};
        }
        else{
            Page = ItemsList;
            utils = {items : this.state.lostItems, onPressHandler : this.showDetails};
        }
        
        return(
            <Page utils={utils}/>
        )
       
            
    }
}