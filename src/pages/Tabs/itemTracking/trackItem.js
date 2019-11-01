import  React, { Component }                                         from 'react';
import  { Text, View }                                               from 'react-native';
import  { DeckSwiper, Card, CardItem, Icon, Body, Left, Thumbnail }  from 'native-base';
import  { getTrackedItems }                                         from '../../../../networking/API'

export default class ItemTracking extends Component {

    state = {trackedItemsList: null}

    componentDidMount()
    {
        getTrackedItems(this.props.utils.item)
        .then(value => this.setState({trackedItemsList: value}));
    }

    componentDidUpdate(prevProps)
    {   
        if(prevProps != this.props)
        {
            getTrackedItems(this.props.utils.item)
            .then(value => this.setState({trackedItemsList:value}));
        }
    }

    generateCard = (item) => {
        return(
        <Card style={{ elevation: 3 }}>
        <CardItem>
            <Left>
            <Thumbnail source={item.Image} />
            <Body>
                <Text>{item.Subcategory}</Text>
                <Text note>NativeBase</Text>
            </Body>
            </Left>
        </CardItem>
        <CardItem cardBody>
            <Image style={{ height: 300, flex: 1 }} source={item.Image} />
        </CardItem>
        <CardItem>
            <Icon name="heart" style={{ color: '#ED4A6A' }} />
            <Text>{item.name}</Text>
        </CardItem>
        </Card>)
    }

    render() {
        return (
            <View>
                <DeckSwiper
                dataSource={cards}
                renderItem={this.generateCard}
                />
            </View>
        );
    }
}
