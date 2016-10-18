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

  pins() {
    return this.props.pins.map((pin, idx) => {
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

  render() {
    const isZoomed = this.props.zoomed;
    const isPinActive = this.props.activePin !== null;

    const center = isZoomed && isPinActive
      ? getPinCoords(this.props.pins[this.props.activePin])
      : this.defaultCenter;

    const zoom = isZoomed
      ? 13
      : this.defaultZoom;

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
            center={center}
            resetBoundsOnResize={true}
            zoom={zoom}>
            {this.pins()}
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default CSSModules(TapasMap, styles);
