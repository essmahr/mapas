import React from 'react';
import { connect } from 'react-redux';
import { loadPins, setCurrentPin, } from '../actions';

import TapasMap from '../components/TapasMap/TapasMap';
import Header from '../components/Header/Header';
import AppWindow from '../components/AppWindow/AppWindow';
import SidebarContainer from '../containers/SidebarContainer';

import styles from '../../styles/base.scss';

class App extends React.Component {
  static propTypes = {};

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPins();
  }

  setCurrentTapa(id) {
    this.props.setCurrentTapa(id);
  }

  firstChild(props) {
    var childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  render() {
    const {currentPin, pins, mapZoomed} = this.props;

    const place = currentPin !== null
      ? pins[currentPin]
      : false;

    return (
      <div className={styles.wrapper}>
        <Header />
        <AppWindow>
          <TapasMap pins={pins} activePin={currentPin} zoomed={mapZoomed} />
          <SidebarContainer place={place} />
        </AppWindow>
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
  { loadPins, setCurrentPin },
)(App);
