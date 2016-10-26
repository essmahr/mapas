import React from 'react';
import GoogleMap from 'google-map-react';
import CSSModules from 'react-css-modules';
import mapStyles from 'json!../../config/mapStyles.json';
import { getPinCoords } from '../../lib/helpers';
import { MAPS_API_KEY } from '../../config/env';
import styles from './TapasMap.scss';

import PinContainer from '../../containers/PinContainer';

class TapasMap extends React.Component {
  defaultCenter = [37.1772127, -3.5921333];
  defaultZoom = 13;

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
    if (this.props.pins.length === 0) return;

    const zoomChange = this.props.zoomed !== nextProps.zoomed;
    const zoomInStart = !zoomChange && this.props.activePin === null && nextProps.activePin !== null;
    const zoomInEnd = zoomChange && this.props.activePin !== null;
    const zoomOutStart = !zoomChange && this.props.activePin !== null && nextProps.activePin === null;
    const zoomOutEnd = zoomChange && this.props.activePin === null;

    const zoom = zoomInStart
      ? this.defaultZoom
      : this.defaultZoom + 2

    const center = (zoomOutEnd || zoomInStart)
      ? this.defaultCenter
      : getPinCoords(nextProps.pins[nextProps.activePin])
        || getPinCoords(this.props.pins[this.props.activePin]);

    this.setState({zoom, center});
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
