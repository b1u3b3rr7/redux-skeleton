import React from 'react';
import { add } from './actions';

class AddButton extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <input value={'+'} type="button" onClick={this.addNumber} />
        )
    }

    addNumber = () => {
        this.props.store.dispatch(add());
    }
}

export default AddButton;