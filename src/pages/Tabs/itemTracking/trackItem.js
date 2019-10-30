import React, { Component } from 'react';
import {Text } from 'react-native';
import  { getTrackedItems } from '../../../../networking/API'

export default class ItemTracking extends Component {

    state = {trackedItemsList: null}

    componentDidMount()
    {
        console.log(this.props.utils.item);
        getTrackedItems(this.props.utils.item)
        .then(value => console.log(value)/*this.setState({trackedItemsList: value})*/);
    }

    componentDidUpdate(prevProps)
    {   
        if(prevProps != this.props)
        {
            getTrackedItems(this.props.utils.item)
            .then(value => this.setState({trackedItemsList:value}));
        }
    }
    render() {
        return <Text> items: </Text>;
    }
}
