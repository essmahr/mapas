import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './ListNav.scss';

const ListNav = function(props) {
  const strokeWidth = 6;

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

export default CSSModules(ListNav, styles);
