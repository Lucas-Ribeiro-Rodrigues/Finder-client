import React, { Component }   from 'react';
import { View, TextInput }        from 'react-native';

export default class TextInputStepGenerator extends Component{

    state = {value: ''}
    
    onValueChangeHandler = (value) => 
    {
        this.setState({
            value: value
        })
    }

    render()
    {
        return(
            <View style={{flex: 1, alignSelf: "stretch", justifyContent: "center"}}>
                <TextInput
                    onChangeText={this.onValueChangeHandler}/>
            </View>
        )
    }
}