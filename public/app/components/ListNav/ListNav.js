import React from 'react';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import styles from './ListNav.scss';
import { mapTransitionClasses } from '../../lib/helpers';

const ListNav = function(props) {
  const strokeWidth = 6;
  const transitionClasses = mapTransitionClasses('nav');

  const navEl = function() {
    return (
      <nav styleName='nav'>
        <button styleName='prev' onClick={() => props.onNavClick('prev')}>
          <svg width="36px" height="36px" viewBox="0 0 36 36">
            <polyline fill="none" points="26.5,1 9.5,18 26.5,35" stroke="#000000" strokeWidth={strokeWidth} strokeLinejoin="bevel" strokeMiterlimit="10"/>
          </svg>
        </button>
        <button styleName='next' onClick={() => props.onNavClick('next')}>
          <svg width="36px" height="36px" viewBox="0 0 36 36">
            <polyline fill="none" points="9.5,35 26.5,18 9.5,1" stroke="#000000" strokeWidth={strokeWidth} strokeLinejoin="bevel" strokeMiterlimit="10"/>
          </svg>
        </button>
        <button styleName='close' onClick={() => props.onNavClick('close')}>
          <svg width="36px" height="36px" viewBox="0 0 36 36">
            <line fill="none" stroke="#000000" strokeWidth={strokeWidth} strokeMiterlimit="10" x1="5" y1="5" x2="31" y2="31"/>
            <line fill="none" stroke="#000000" strokeWidth={strokeWidth} strokeMiterlimit="10" x1="5" y1="31" x2="31" y2="5"/>
          </svg>
        </button>
      </nav>
    );
  }

  return (
    <CSSTransitionGroup
      transitionName={transitionClasses}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}>
      {props.visible ? navEl() : null}
    </CSSTransitionGroup>
  );
}

export default CSSModules(ListNav, styles);


