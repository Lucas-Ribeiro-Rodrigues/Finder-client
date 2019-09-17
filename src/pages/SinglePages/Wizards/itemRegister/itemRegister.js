import MultiStep from 'react-native-multistep-wizard';
import React, { Component } from "../../../../../../../AppData/Local/Microsoft/TypeScript/2.9/node_modules/@types/react";
import {View} from 'react-native'
import Category from './Steps/category'
/*import StepTwo from './StepTwo'
import StepThree from './StepThree'*/

export default class ItemRegister extends Component{

    constructor(props){
        super(props);
    }

    static navigationOptions = {
        header: null,
    }

    finish(wizardState){
            
        }

    render(){
        const steps = [
            {name: 'Category', component: <Category navigation = {this.props.navigation}/>},
            /*{name: 'StepTwo', component: <StepTwo/>},
            {name: 'StepThree', component: <StepThree/>},*/
          ];
        return(
            <View>
                <MultiStep steps={steps} onFinish={this.finish}/>
            </View>
        )
    }
}