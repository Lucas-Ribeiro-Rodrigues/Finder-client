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

    render()
    {
        return(
            <View style={{flex: 1, alignSelf: "center", justifyContent: "center", width: SCREEN_WIDTH - 20}}>
                <TextInput
                    onChangeText={this.onValueChangeHandler}
                    style={styles.TextInput}
                    autoFocus
                    autoCorrect={false}/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    TextInput:{
        borderRadius: 6,
        borderWidth:  2,
        height:       40,
        width: SCREEN_WIDTH - 20,
        paddingRight: 10,
        paddingLeft: 10,
        fontSize:     20,
        alignSelf: "center",
        borderColor: '#d6d7da',
    }
})