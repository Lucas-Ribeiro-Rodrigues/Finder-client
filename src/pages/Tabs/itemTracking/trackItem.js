import  React, { Component }                                         from 'react';
import  { View, Text, Image }                                               from 'react-native';
import  { DeckSwiper, Card, CardItem, Icon, Body, Left, Thumbnail}  from 'native-base';
import  { getTrackedItems }                                         from '../../../../networking/API'
import   DefaultImage from '../../../../assets/question_mark.png'


export default class ItemTracking extends Component {

    state = {trackedItemsList: null, match: []}

    componentDidMount()
    {
        this.match = [];
        getTrackedItems(this.props.utils.item)
        .then(value => this.setState({trackedItemsList: value}));
    }

    componentDidUpdate(prevProps)
    {   
        if(prevProps != this.props)
        {
            this.match = [];
            getTrackedItems(this.props.utils.item)
            .then(value => this.setState({trackedItemsList:value}));
        }
    }

    generateCard = (item) => {
        return (
        <Card style={{elevation: 3}}>
            <CardItem>
                <Left>
                    <Thumbnail source={item.Image ? {uri: item.Image} : DefaultImage} />
                <Body>
                    <Text>{item.Subcategory}</Text>
                    <Text note>NativeBase</Text>
                </Body>
                </Left>
            </CardItem>
            <CardItem cardBody>
                <Image style={{ height: 250, flex: 1, resizeMode: "stretch" }} source={item.Image ? {uri: item.Image} : DefaultImage} />
            </CardItem>
            <CardItem>
                <Icon name="heart" style={{ color: '#ED4A6A' }} />
            </CardItem>
        </Card>)
    }

    onSwipeLeft = (item) => {

    }

    onSwipeRight = (item) => {
        if(!this.state.match.includes(item))
            this.state.match.push(item);

        console.log(this.state.match);
    }

    render() {
        return (
            <View style={{flex: 1, height: 500, width: 350, alignSelf: "center", marginTop: 70}}>
                {this.state.trackedItemsList ? 
                <DeckSwiper
                dataSource  =   {this.state.trackedItemsList ? this.state.trackedItemsList: ["empty"]}
                renderEmpty=    {() =>
                    <View style={{ alignSelf: "center", justifyContent: "center" }}>
                      <Text>Over</Text>
                    </View>
                  }
                renderItem  =   {this.generateCard}
                onSwipeLeft =   {this.onSwipeLeft}
                onSwipeRight=   {this.onSwipeRight}
                looping ={false}
                />: null}
            </View>
        );
    }
}
