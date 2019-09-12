import React, { Component } from 'React';
import { Dimensions, Text , View} from 'react-native';
import { Container, Content, Fab, Icon } from 'native-base';
import MapView from 'react-native-maps'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../../assets/icon.png");

export default class Map extends Component{
    
    state = {region: null}

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
                    }
                })
            }, //success
            () => {}, //error 
            {
                timeout : 2000,
                enableHighAccuracy : true,
                maximumAge : 1000
            }

        )
    }

    render()
    {
        const {region} = this.state;
        return(
                <MapView
                    style={{flex:1
                    }}
                    initialRegion={region}
                    showsUserLocation
                    loadingEnabled
                />
        )
    }
}