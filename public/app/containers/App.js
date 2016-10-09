import React from 'react';
import { connect } from 'react-redux';
import { loadPins, setCurrentPin, } from '../actions';

import TapasMap from '../components/TapasMap/TapasMap';
import Header from '../components/Header/Header';
import AppWindow from '../components/AppWindow/AppWindow';
import TapasList from '../components/TapasList/TapasList';

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
    console.log('hey');
    if (evt.key === 'Escape' && this.props.currentPin !== null) {
      this.props.setCurrentPin(null);
    }
  }

  setCurrentTapa(id) {
    this.props.setCurrentTapa(id);
  }

  render() {
    const place = this.props.currentPin !== null
      ? this.props.pins[this.props.currentPin]
      : false;

    const mapListening = this.props.currentPin === null;

    return (
      <div className={styles.wrapper} onKeyDown={this.handleKeyDown.bind(this)}>
        <AppWindow>
          <TapasMap pins={this.props.pins} listening={mapListening} />
          { place ? <TapasList place={place} onTapaSelect={this.setCurrentTapa.bind(this)} /> : null }
        </AppWindow>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    currentPin: state.currentPin,
    currentTapa: state.currentTapa,
  };
}

export default connect(
  mapStateToProps,
  { loadPins, setCurrentPin },
)(App);
