import React from 'react';
import { connect } from 'react-redux';
import { sub } from './actions';

class SubButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input value={'-'} type="button" onClick={this.props.subNumber} />
        )
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        subNumber: () => dispatch(sub())
    }
};

SubButton = connect(null, mapDispatchToProps)(SubButton);

export default SubButton;