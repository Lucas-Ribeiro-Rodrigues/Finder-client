import React, {Component} from 'react';
import TouchableList      from '../../../../../components/multipleChoiceStep/TouchableList';

export default class MultipleChoiceStepGenerator extends Component{

    state = {value: this.props.utils.options[0], activeButton: 0}

    onButtonPressHandler = (index, value) => 
    {
        this.setState({
            activeButton: index,
            value: value
        })
    }

    componentDidMount(prevProps)
    {
        if(!this.props.utils.isFirstStep)
            this.props.animateSlideIn(this.props.utils.direction);
    }

    componentDidUpdate(prevProps)
    {
        if(this.state.value != this.props.utils.options[0] && this.props.utils != prevProps.utils) //previnir loop
        {
            this.setState({value: this.props.utils.options[0], activeButton: 0});
            this.props.animateSlideIn(this.props.utils.direction);
        }
    }
    
    render()
    {
        return(
            <TouchableList 
                onPressHandler={this.onButtonPressHandler} 
                options={this.props.utils.options}
                activeButton={this.state.activeButton}/>
        )
    }
}