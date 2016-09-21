import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TapasPin.scss';

const TapasPin = function(props) {
  return (
    <div styleName='outer'>
      <div styleName='inner'>Pin!</div>
    </div>
  );
}

export default CSSModules(TapasPin, styles);
