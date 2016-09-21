import React from 'react';
import GoogleMap from 'google-map-react';
import mapStyles from 'json!../../config/mapStyles.json';
import TapasPin from '../TapasPin/TapasPin';

export default class TapasMap extends React.Component {
  static propTypes = {
    pins: React.PropTypes.array,
  };

  constructor(props) {
    super(props);
  }

  pins() {
    return this.props.pins.map((pin, idx) => {
      return <TapasPin key={idx} lat={pin.latitude} lng={pin.longitude} />
    });
  }

  render() {
    const center = [37.1772127, -3.5921333];

    const zoom = 16;

    const options = {
      styles: mapStyles,
    }

    const style = {
      width: '100vw',
      height: '100vh',
    }

    return (
      <GoogleMap
        options={options}
        defaultCenter={center}
        defaultZoom={zoom}
        style={style}>
        {this.pins()}
      </GoogleMap>
    );
  }
}
