import React from 'react';
import { connect } from 'react-redux';
import { add } from './actions';

class AddButton extends React.Component {
    render() {
        return (
            <input value={'+'} type="button" onClick={this.props.addNumber} />
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addNumber: () => dispatch(add())
    };
};

AddButton = connect(null, mapDispatchToProps)(AddButton);

export default AddButton;