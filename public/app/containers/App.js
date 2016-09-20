import React from 'react';
import { connect } from 'react-redux';
import { loadPins } from '../actions';
import { bindActionCreators } from 'redux';

import TapasMap from '../components/TapasMap';

class App extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPins();
  }

  render() {
    return (
      <TapasMap pins={this.props.pins} />
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
