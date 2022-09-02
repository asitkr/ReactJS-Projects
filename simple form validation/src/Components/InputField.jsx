import React from "react";
import './InputField.css';

class InputField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            focused: false
        }

        this.handleBlur = this.handleBlur.bind(this);
        this.inputVal = this.props.inputProps;
    }

    handleBlur() {
        this.setState({focused: true});
    }

    render() {
        return(
            <div>
                <input required onBlur={this.handleBlur} focused={this.state.focused.toString()} {...this.inputVal} onChange={this.props.handleChange}></input> <br/>
                <span>{this.inputVal.errorMsg}</span>
            </div>
        )
    }
}

export default InputField;