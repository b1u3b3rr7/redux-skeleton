import React from 'react';
import { connect } from 'react-redux';
import AddButton from './AddButton';
import SubButton from './SubButton';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <span>{this.props.number}</span><br />
        <AddButton /><SubButton />
      </div>
    );
  }
}

let mapStateToProps = (state) => {
  return {
    number: state.data.number
  };
};

App = connect(mapStateToProps, null)(App);

export default App;