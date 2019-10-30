import  React, { Component } from 'react';
import  { View, Text }       from 'react-native';
import   ItemsList            from '../../../components/items/itemsList'; 
import   TrackItem        from './trackItem';
import  { getItemsFromUser } from '../../../../networking/API'

// import { Container } from './styles';

export default class UserItemsList extends Component {

    state = {itemsList: null, SelectedPage: ItemsList}

    componentDidUpdate(prevProps)
    {
        if(prevProps != this.props)
        {
            getItemsFromUser(this.props.email)
            .then(value => {this.setState({itemsList: value});});
            this.utils = {items: this.state.itemsList, onPressHandler: this.onPressHandler};
        }
    }

    onPressHandler = (item) => {
        this.setState({SelectedPage : TrackItem})
        this.utils = {item: item};
    }

    render() {
        
        return (<this.state.SelectedPage utils={(this.utils ? this.utils: {})}/>);
    }
}
