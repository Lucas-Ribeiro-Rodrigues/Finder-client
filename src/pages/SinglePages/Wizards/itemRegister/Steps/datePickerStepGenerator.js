import React, { Component } from 'react';
import { DatePicker }       from 'native-base';
import { View } from 'react-native';

export default class Steps extends Component {

    state = {value: ''}

    constructor(props)
    {
        super(props);
        this.props.animateSlideIn(this.props.utils.direction);
        let data = new Date();
        this.day  = data.getDate();
        this.month  = data.getMonth();
        this.year  = data.getFullYear();
    }

    setDate = (date) => {
        this.setState({value: date.toString().substr(4, 12)});
    }

    render() {
        return (
            <DatePicker
                defaultDate={new Date(this.year, this.month, this.day)}
                minimumDate={new Date(this.year, this.month - 2, 1)}
                maximumDate={new Date(this.year, this.month, this.day)}
                locale={"en"}
                timeZoneOffsetInMinutes={undefined}
                modalTransparent={false}
                androidMode={"default"}
                placeHolderText={(this.props.utils ? this.props.utils.message : '')}
                textStyle={{ color: "green" }}
                placeHolderTextStyle={{ color: "#d3d3d3" }}
                onDateChange={this.setDate}
                disabled={false}
            />
        );
    }
}
