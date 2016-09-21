import React from 'react';
import { connect } from 'react-redux';
import { loadPins } from '../actions';
import { bindActionCreators } from 'redux';

import TapasMap from '../components/TapasMap/TapasMap';
import AppContainer from '../components/AppContainer/AppContainer';

import '../../styles/base.scss';

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
      <AppContainer>
        <TapasMap pins={this.props.pins} />
      </AppContainer>
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
