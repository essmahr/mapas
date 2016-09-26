import React from 'react';
import { connect } from 'react-redux';
import { loadPins } from '../actions';
import { bindActionCreators } from 'redux';

import TapasMap from '../components/TapasMap/TapasMap';
import Header from '../components/Header/Header';
import AppWrapper from '../components/AppWrapper/AppWrapper';
import Overlay from '../components/Overlay/Overlay';

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
      <AppWrapper>
        <Header />
        <TapasMap pins={this.props.pins} />
        { this.props.activePin !== null ? <Overlay /> : null }
      </AppWrapper>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    activePin: state.activePin,
  };
}

export default connect(
  mapStateToProps,
  { loadPins },
)(App);
