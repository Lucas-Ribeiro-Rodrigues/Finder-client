import React, {Component} from 'react';
import Touchable          from "./Touchable";
import { View }           from 'react-native';

export default class TouchableList extends Component{

    generateList = () => {
        let options = this.props.options;
        var i = 0;
        const list = options.map(option => {
            let active = false;

            if(this.props.activeButton == i)
                active = true;

            return <Touchable 
                        key={i}
                        buttonIndex={i++} 
                        text={option} 
                        onPressHandler={this.props.onPressHandler}
                        active={active}/>
        });

        return list;
    }

    render()
    {
        const touchables = this.generateList();
        return(
            <View style={{flex: 1}}>
                {touchables}
            </View>
        )
    }
}