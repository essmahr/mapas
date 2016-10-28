import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AppWindow.scss';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { mapTransitionClasses } from '../../lib/helpers';

const AppContainer = function(props) {
  const outerStyle = props.sliderActive ? 'outer-active' : 'outer';
  const transitionClasses = mapTransitionClasses('loader');

  return (
    <div styleName={outerStyle}>
      <div styleName="inner">
        {props.children}
        <CSSTransitionGroup
          transitionName={transitionClasses}
          transitionEnter={false}
          transitionEnterTimeout={600}
          transitionLeaveTimeout={600}>
          {!props.pinsLoaded ? <div styleName="loader">Loading Map</div> : null}
          </CSSTransitionGroup>
      </div>
    </div>
  );
}

export default CSSModules(AppContainer, styles);
