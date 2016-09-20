import React from 'react';
import { connect } from 'react-redux';
import { loadPins } from '../actions';
import { bindActionCreators } from 'redux';

class App extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPins();
  }

  render() {
    const actions = this.props.actions;

    return (
      <div>
        <h2>Sup</h2>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins
  };
}

export default connect(
  mapStateToProps,
  { loadPins },
)(App);
