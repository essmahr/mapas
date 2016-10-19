import React from 'react';
import GoogleMap from 'google-map-react';
import CSSModules from 'react-css-modules';
import mapStyles from 'json!../../config/mapStyles.json';
import { getPinCoords } from '../../lib/helpers';

import styles from './TapasMap.scss';

import PinContainer from '../../containers/PinContainer';

class TapasMap extends React.Component {
  defaultCenter = [37.1772127, -3.5921333];
  defaultZoom = 12;

  static propTypes = {
    pins: React.PropTypes.array,
  };

  constructor(props) {
    super(props);

    this.state = {
      zoom: this.defaultZoom,
      center: this.defaultCenter,
    }
  }

  pins() {
    return this.props.pins.map((pin, idx) => {
      if (!pin.tapas || pin.tapas.length === 0) return;

      const isActive = this.props.activePin === idx;

      return <PinContainer
        id={idx}
        lat={pin.latitude}
        lng={pin.longitude}
        key={idx}
        isActive={isActive}
        />
    });
  }

  componentWillReceiveProps(nextProps) {
    // zoom out
    if (this.props.zoomed && !nextProps.zoomed) {
      this.setState({
        zoom: this.defaultZoom,
        center: this.defaultCenter,
      });
    }

    // zoom in
    if (!this.props.zoomed && nextProps.zoomed) {
      this.setState({
        zoom: this.defaultZoom + 1,
        center: getPinCoords(this.props.pins[this.props.activePin]),
      });
    }
  }

  render() {
    function createOptions(map) {
      return {
        styles: mapStyles,
        keyboardShortcuts: false,
        zoomControlOptions: {
          position: map.ControlPosition.LEFT_BOTTOM,
        },
      }
    };

    return (
      <div styleName='map'>
        <div styleName='inner'>
          <GoogleMap
            options={createOptions}
            defaultCenter={this.defaultCenter}
            center={this.state.center}
            resetBoundsOnResize={true}
            zoom={this.state.zoom}>
            {this.pins()}
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default CSSModules(TapasMap, styles);
