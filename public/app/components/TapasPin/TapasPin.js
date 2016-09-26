import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TapasPin.scss';

const TapasPin = function(props) {
  return (
    <div onClick={props.onClick.bind(this)} styleName='pin'></div>
  );
}

export default CSSModules(TapasPin, styles);
