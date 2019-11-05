import  React, { Component } from 'react';
import  { View, Text }       from 'react-native';
import   ItemsList            from '../../../components/items/itemsList'; 
import   TrackItem        from './trackItem';
import  { getItemsFromUser } from '../../../../networking/API'

// import { Container } from './styles';

export default class UserItemsList extends Component {

    state = {utils: null, SelectedPage: ItemsList}

    componentDidMount()
    {
        this.utils = {};
        getItemsFromUser(this.props.email)
        .then(value => {
                this.setState({utils: {items: value, onPressHandler: this.onPressHandler}});
            });
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps != this.props)
        {
            getItemsFromUser(this.props.email)
            .then(value => {
                    this.setState({utils: {items: value, onPressHandler: this.onPressHandler}});
                });
        }
    }

    onPressHandler = (item) => {
        this.setState({SelectedPage : TrackItem, utils: {item: item}});
    }

    render() {
        return (<this.state.SelectedPage utils={(this.state.utils ? this.state.utils: {})}/>);
    }
}
