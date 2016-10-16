import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TapasPin.scss';

const TapasPin = function(props) {
  const styleName = props.isActive ? 'active' : 'pin';

  return (
    <div onClick={props.onClick.bind(this)} styleName={styleName}></div>
  );
}

export default CSSModules(TapasPin, styles);
