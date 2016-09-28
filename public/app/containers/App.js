import React from 'react';
import { connect } from 'react-redux';
import { loadPins, setCurrentPin } from '../actions';
import { bindActionCreators } from 'redux';

import TapasMap from '../components/TapasMap/TapasMap';
import Header from '../components/Header/Header';
import AppWindow from '../components/AppWindow/AppWindow';
import Overlay from '../components/Overlay/Overlay';

import styles from '../../styles/base.scss';

class App extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPins();
  }

  handleKeyDown(evt) {
    if (evt.key === 'Escape' && this.props.currentPin !== null) {
      this.props.setCurrentPin(null);
    }
  }

  render() {
    const place = this.props.currentPin !== null
      ? this.props.pins[this.props.currentPin]
      : false;

    const mapListening = this.props.currentPin === null;

    return (
      <div className={styles.wrapper} onKeyDown={this.handleKeyDown.bind(this)}>
        <Header />
        <AppWindow>
          <TapasMap pins={this.props.pins} listening={mapListening} />
          { place ? <Overlay place={place} /> : null }
        </AppWindow>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    currentPin: state.currentPin,
  };
}

export default connect(
  mapStateToProps,
  { loadPins, setCurrentPin, },
)(App);
