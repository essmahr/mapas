import React from 'react';
import { connect } from 'react-redux';
import debounce from 'just-debounce';
import { loadPins, setCurrentPin, toggleAboutState } from '../actions';
import navHelpers from '../lib/navHelpers';

import ListNavContainer from './ListNavContainer';
import TapasMap from '../components/TapasMap/TapasMap';
import Header from '../components/Header/Header';
import AppWindow from '../components/AppWindow/AppWindow';
import SidebarParent from '../components/Sidebar/SidebarParent';
import Footer from '../components/Footer/Footer';
import About from '../components/About/About';

import styles from '../../styles/base.scss';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.handleKeyDown = debounce(navHelpers.handleKeyDown.bind(this), 400, true);
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
    const {
      pins,
      pinsLoaded,
      currentPin,
      mapZoomed,
      aboutVisible
    } = this.props;

    const place = currentPin !== null
      ? pins[currentPin]
      : false;

    return (
      <div className={styles.wrapper}>
        <Header />
        <AppWindow sliderActive={currentPin !== null} pinsLoaded={pinsLoaded}>
          <About visible={aboutVisible} onClose={this.props.toggleAboutState} />
          <TapasMap pins={pins} activePin={currentPin} zoomed={mapZoomed} />
          <SidebarParent place={place} currentPin={currentPin} pinsCount={pins.length} />
        </AppWindow>
        <ListNavContainer hidden={aboutVisible}/>
        <Footer aboutVisible={aboutVisible} pinActive={place} onAboutClick={this.props.toggleAboutState} />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    pinsLoaded: state.pinsLoaded,
    currentPin: state.currentPin,
    mapZoomed: state.mapZoomed,
    aboutVisible: state.aboutVisible,
  };
}

export default connect(
  mapStateToProps,
  {
    loadPins,
    setCurrentPin,
    toggleAboutState,
  }
)(App);
