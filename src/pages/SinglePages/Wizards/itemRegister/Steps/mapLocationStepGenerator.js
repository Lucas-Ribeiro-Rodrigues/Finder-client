import React, { Component } from 'react';
import {StyleSheet, Image,
        TouchableOpacity }  from 'react-native';
import DefaultImage         from '../../../../../../assets/camera_default.png';
import  MapView             from 'react-native-maps'

export default class MapLocationStepGenerator extends Component{
    state = {region: null, value: '', markerLocation: undefined}
    
    componentDidMount()
    {
        navigator.geolocation.getCurrentPosition(
            ({coords : {latitude, longitude}}) => {
                this.setState({
                    region: {
                        latitude,
                        longitude,
                        latitudeDelta: 0.0143,
                        longitudeDelta: 0.0134,
                    },
                    value: {
                        latitude, 
                        longitude
                    }
                })
            }, //success
            () => {}, //error 
            {
                timeout : 2000,
                enableHighAccuracy : true,
                maximumAge : 1000
            }
            
        );
        this.props.animateSlideIn(this.props.utils.direction);
    }
    render()
    {
        let { region, value } = this.state;
        return(
            <MapView
                style={{flex:1
                }}
                initialRegion={region}
                showsUserLocation
                loadingEnabled
            >
                <MapView.Marker 
                    draggable
                    coordinate={(value ? value: {latitude: 0, longitude: 0})}
                    onDragEnd={e => this.setState({value: e.nativeEvent.coordinate})}
                />
            </MapView>
        )
    }

}