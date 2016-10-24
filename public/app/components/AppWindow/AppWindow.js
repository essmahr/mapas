import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AppWindow.scss';

const AppContainer = function(props) {
  const styleName = props.sliderActive ? 'outer-active' : 'outer';

  return (
    <div styleName={styleName}>
      <div styleName='inner'>
        {props.children}
      </div>
    </div>
  );
}

export default CSSModules(AppContainer, styles);
