import MultiStep from 'react-native-multistep-wizard';
import React, { Component } from "React";
import {View} from 'react-native'
import Categoria from './Steps/categoria'
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
            {name: 'Categoria', component: <Categoria navigation = {this.props.navigation}/>},
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