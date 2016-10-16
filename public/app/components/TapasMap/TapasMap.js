import React from 'react';
import GoogleMap from 'google-map-react';
import CSSModules from 'react-css-modules';
import mapStyles from 'json!../../config/mapStyles.json';

import styles from './TapasMap.scss';

import PinContainer from '../../containers/PinContainer';

class TapasMap extends React.Component {
  static propTypes = {
    pins: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
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

  render() {
    const mapListening = this.props.activePin !== null;

    const center = [37.1772127, -3.5921333];

    const zoom = 12;

    const options = {
      styles: mapStyles,
      keyboardShortcuts: mapListening,
    };

    return (
      <div styleName='map'>
        <GoogleMap
          options={options}
          defaultCenter={center}
          defaultZoom={zoom}>
          {this.pins()}
        </GoogleMap>
      </div>
    );
  }
}

export default CSSModules(TapasMap, styles);
