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
    const {pins, pinsLoaded, currentPin, mapZoomed} = this.props;

    const place = currentPin !== null
      ? pins[currentPin]
      : false;

    return (
      <div className={styles.wrapper}>
        <Header />
        <AppWindow sliderActive={currentPin !== null} pinsLoaded={pinsLoaded}>
          <TapasMap pins={pins} activePin={currentPin} zoomed={mapZoomed} />
          <SidebarParent place={place} currentPin={currentPin} />
        </AppWindow>
        <ListNavContainer />
        <Footer />
      </div>
    );
  }
}

function Footer() {
  return (
    <div className={styles.footer}>
      a <a href="http://smahr.net">smahr.net</a> project
      <span className={styles.sep}>|</span>
      <a href="https://github.com/essmahr/mapas">github</a>
    </div>
  );
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    pinsLoaded: state.pinsLoaded,
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
