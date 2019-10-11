import React, { Component } from 'react';
import {StyleSheet, Image,
        TouchableOpacity }  from 'react-native';
import DefaultImage         from '../../../../../../assets/camera_default.png';
import * as ImagePicker     from 'expo-image-picker';

export default class ImagePickerStepGenerator extends Component{

    state = {value: null, image: undefined};

    constructor(props)
    {
        super(props);
    }

    componentDidMount(prevProps)
    {
        this.props.animateSlideIn();
    }

    launchImageLibrary = async() =>
    {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Image,
            base64: true,
            aspect: [4, 3],
          })
          
          if(!result.cancelled)
          {
                this.setState({image: result.uri, value:result.base64});
          }
    }

    render()
    {
        return(
            <TouchableOpacity
                style={{flex: 1}}
                onPress={this.launchImageLibrary}>
                <Image 
                    source={(this.state.image ? {uri: this.state.image} : DefaultImage)}
                    style={styles.ImagePicker}/>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    ImagePicker: {
        flex: 1, 
        height: undefined, 
        width: undefined, 
        margin: 20, 
        borderRadius: 4,
        borderWidth: 2, 
        borderColor: 'black'
    }
})