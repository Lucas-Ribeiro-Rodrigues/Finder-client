import React, {Component} from 'react';
import TouchableList      from '../../../../../components/multipleChoiceStep/TouchableList';
export default class MultipleChoiceStepGenerator extends Component{

    state = {selectedItemValue: this.props.options[0], activeButton: 0}
    
    onButtonPressHandler = (index, value) => 
    {
        this.setState({
            activeButton: index,
            selectedItemValue: value
        })
    }

    render()
    {
        return(
            <TouchableList 
                onPressHandler={this.onButtonPressHandler} 
                options={this.props.options}
                activeButton={this.state.activeButton}/>
        )
    }
}