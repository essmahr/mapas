import React from 'react';
import { connect } from 'react-redux';
import { loadPins, setCurrentPin, } from '../actions';

import navHelpers from '../lib/navHelpers';

import ListNavContainer from './ListNavContainer';
import TapasMap from '../components/TapasMap/TapasMap';
import Header from '../components/Header/Header';
import AppWindow from '../components/AppWindow/AppWindow';
import SidebarParent from '../components/Sidebar/SidebarParent';

import styles from '../../styles/base.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = navHelpers.handleKeyDown.bind(this)
  }

  componentWillMount() {
    this.props.loadPins();
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    const {currentPin, pins, mapZoomed} = this.props;

    const place = currentPin !== null
      ? pins[currentPin]
      : false;

    return (
      <div className={styles.wrapper}>
        <Header />
        <AppWindow sliderActive={place}>
          <TapasMap pins={pins} activePin={currentPin} zoomed={mapZoomed} />
          <SidebarParent place={place} />
        </AppWindow>
        <ListNavContainer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    currentPin: state.currentPin,
    mapZoomed: state.mapZoomed,
  };
}

export default connect(
  mapStateToProps,
  {
    loadPins,
    setCurrentPin,
  }
)(App);
