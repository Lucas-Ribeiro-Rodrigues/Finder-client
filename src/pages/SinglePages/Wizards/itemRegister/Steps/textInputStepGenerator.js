import React, { Component }             from 'react';
import { View, TextInput, StyleSheet, Dimensions }  from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;

export default class TextInputStepGenerator extends Component{

    state = {value: ''}
    
    onValueChangeHandler = (value) => 
    {
        this.setState({
            value: value
        })
    }

    componentDidMount()
    {
        this.multiline      = false;
        this.numberOfLines  = 1;
    }

    componentDidUpdate(prevProps)
    {
        if(prevProps != this.props)
        {
            if(this.props.isTextArea)
            {
                this.multiline      = true;
                this.numberOfLines  = 10;
            }
            else
            {
                this.multiline      = false;
                this.numberOfLines  = 1;
            }
            this.textInput.clear();
        }
    }

    render()
    {
        return(
            <View style={{flex: 1, alignSelf: "center", justifyContent: "center", width: SCREEN_WIDTH - 20}}>
                <TextInput
                    autoFocus
                    multiline       = {this.multiline}
                    numberOfLines   = {this.numberOfLines}
                    ref             = {e => this.textInput = e}
                    onChangeText    = {this.onValueChangeHandler}
                    style           = {(!this.props.isTextArea ? styles.TextInput: {...styles.TextInput,...styles.TextArea})}
                    autoCorrect     = {false}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextInput:{
        borderRadius: 6,
        borderWidth :  2,
        height      :       40,
        width       : SCREEN_WIDTH - 20,
        paddingRight: 10,
        paddingLeft : 10,
        fontSize    :     20,
        alignSelf   : "center",
        borderColor : '#d6d7da'
    },
    TextArea: {
        height              : 400, 
        textAlignVertical   : 'top', 
        paddingVertical     : 10
    }
})