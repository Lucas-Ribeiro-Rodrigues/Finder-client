import React, {Component} from 'react';
import TouchableList      from '../../../../../components/multipleChoiceStep/TouchableList';

export default class MultipleChoiceStepGenerator extends Component{

    state = {value: this.props.options[0], activeButton: 0}

    onButtonPressHandler = (index, value) => 
    {
        this.setState({
            activeButton: index,
            value: value
        })
    }

    componentDidUpdate(prevProps)
    {
        if(this.state.value != this.props.options[0] && this.props != prevProps) //previnir loop
            this.setState({value: this.props.options[0], activeButton: 0});
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