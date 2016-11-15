import React from 'react';
import GoogleMap from 'google-map-react';
import { fitBounds } from 'google-map-react/utils';
import CSSModules from 'react-css-modules';
import mapStyles from 'json!../../config/mapStyles.json';
import { getPinCoords, getBoundsByLocation } from '../../lib/helpers';
import { MAPS_API_KEY } from '../../config/env';
import styles from './TapasMap.scss';

import PinContainer from '../../containers/PinContainer';

class TapasMap extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      center: [37.180621, -3.597090],
      zoom: 15,
    }
  }

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

  shouldComponentUpdate(nextProps) {
    if (this.props.zoomed !== nextProps.zoomed) {
      return true;
    }

    if (this.props.activePin !== nextProps.activePin) {
      return true;
    }

    return false;
  }

  getInitialBounds() {
    const bounds = getBoundsByLocation(this.props.pins, 'Granada');

    const mapSize = {
      width: document.body.clientWidth * 0.9,
      height: document.body.clientHeight * 0.8,
    }

    const {center, zoom} = fitBounds(bounds, mapSize);

    this.setState({center, zoom});
  }

  getUpdatedBounds(oldProps, newProps) {
    const zoomChange = oldProps.zoomed !== newProps.zoomed;
    const zoomInStart = !zoomChange && oldProps.activePin === null && newProps.activePin !== null;
    const zoomOutEnd = zoomChange && oldProps.activePin === null;

    const center = (zoomOutEnd || zoomInStart)
      ? this.state.center
      : getPinCoords(newProps.pins[newProps.activePin])
        || getPinCoords(oldProps.pins[oldProps.activePin]);

    this.setState({center});
  }

  componentWillMount() {
    this.getInitialBounds();
  }

  componentWillReceiveProps(nextProps) {
    this.getUpdatedBounds(this.props, nextProps);
  }

  render() {
    const innerClass = this.props.activePin !== null
      ? 'inner-active'
      : 'inner';

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
        <div styleName={innerClass}>
          <GoogleMap
            bootstrapURLKeys={{key: MAPS_API_KEY}}
            options={createOptions}
            zoom={this.state.zoom}
            center={this.state.center}
            resetBoundsOnResize={true}>
            {this.pins()}
          </GoogleMap>
        </div>
      </div>
    );
  }
}

export default CSSModules(TapasMap, styles);
