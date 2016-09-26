import React from 'react';
import GoogleMap from 'google-map-react';
import CSSModules from 'react-css-modules';
import mapStyles from 'json!../../config/mapStyles.json';

import styles from './TapasMap.scss';

import PinContainer from '../../containers/Pin';

class TapasMap extends React.Component {
  static propTypes = {
    pins: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  pins() {
    return this.props.pins.map((pin, idx) => {
      return <PinContainer
        id={idx}
        lat={pin.latitude}
        lng={pin.longitude}
        key={idx}
        />
    });
  }

  render() {
    const center = [37.1772127, -3.5921333];

    const zoom = 16;

    const options = {
      styles: mapStyles,
    };

    return (
      <div styleName='wrapper'>
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
