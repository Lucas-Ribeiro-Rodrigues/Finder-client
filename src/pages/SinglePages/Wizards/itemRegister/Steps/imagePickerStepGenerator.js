import React, { Component }             from 'react'
import {StyleSheet, Image,
        TouchableOpacity, Platform }    from 'react-native'
import DefaultImage                     from '../../../../../../assets/camera_default.png'
import * as ImagePicker                 from 'expo-image-picker'
import firebase                         from 'firebase'

export default class ImagePickerStepGenerator extends Component{

    state = {value: null, image: undefined};

    constructor(props)
    {
        super(props);
    }

    uploadImage = () => {
        let uri = this.state.image;
        if(uri)
        {
            const blob = await new Promise((resolve, reject) => {
                const xhr = new XMLHttpRequest();
                xhr.onload = function() {
                  resolve(xhr.response);
                };
                xhr.onerror = function(e) {
                  console.log(e);
                  reject(new TypeError('Network request failed'));
                };
                xhr.responseType = 'blob';
                xhr.open('GET', uri, true);
                xhr.send(null);
              });
            
              const ref = firebase
                .storage()
                .ref()
                .child(uuid.v4());
              const snapshot = await ref.put(blob);
            
              // We're done with the blob, close and release it
              blob.close();
            
              this.setState({value: snapshot.ref.getDownloadURL()});
        }
      };

    componentDidMount(prevProps)
    {
        this.props.animateSlideIn(this.props.utils.direction);
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
                this.setState({image: result.uri});
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