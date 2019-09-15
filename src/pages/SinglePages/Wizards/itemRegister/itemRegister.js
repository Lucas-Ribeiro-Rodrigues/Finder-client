import MultiStep from 'react-native-multistep-wizard';
import React, { Component } from "React";
import {View} from 'react-native'
import Tipo from './Steps/tipo'
/*import StepTwo from './StepTwo'
import StepThree from './StepThree'*/

const steps = [
              {name: 'Tipo', component: <Tipo/>},
              /*{name: 'StepTwo', component: <StepTwo/>},
              {name: 'StepThree', component: <StepThree/>},*/
            ];

export default class Register extends Component{

    static navigationOptions = {
        header: null,
    }

    finish(wizardState){
            
        }

    render(){
        return(
            <View style>
                <MultiStep steps={steps} onFinish={this.finish}/>
            </View>
        )
    }
}