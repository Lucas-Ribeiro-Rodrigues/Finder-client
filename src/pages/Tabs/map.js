import React, { Component } from 'React';
import { Dimensions, Text , View} from 'react-native';
import { Container, Content, Fab, Icon } from 'native-base';
import { getItems }                      from '../../../networking/API';
import MapView from 'react-native-maps'

const SCREEN_WIDTH = Dimensions.get('window').width;
const SCREEN_HEIGHT = Dimensions.get('window').height;
const Logo = require("../../../assets/icon.png");

export default class Map extends Component{
    
    state = {region: null, items: null}

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
            () => {}, //erro 
            {
                timeout : 2000,
                enableHighAccuracy : true,
                maximumAge : 1000
            }
        )
        getItems()
        .then(response => this.setState({items: response}));
    }

    generateMarkers = () => {
        const {items} = this.state;
        if(items)
        {
            return items.map((item, index) => {
                if(item.Location)
                {
                    return(
                        (item.Situation == "Lost" ?
                        <MapView.Marker 
                            key        = {index}
                            coordinate = {item.Location}
                            title      = {item.Situation == "Lost" ? "Perdido" : "Achado"}
                            pinColor   = {"tomato"}
                            description= {item.Subcategory}/>
                            : null)
                    )

                }
            })
        }
        else
        return items;
    }

    render()
    {
        const {region} = this.state;
        const markers  = this.generateMarkers();
        return(
                <MapView
                    style={{flex:1
                    }}
                    initialRegion={region}
                    showsUserLocation
                    loadingEnabled
                >
                    {markers}
                </MapView>
        )
    }
}