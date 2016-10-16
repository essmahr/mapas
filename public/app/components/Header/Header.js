import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

const Header = function(props) {
  return (
    <header styleName='header'>
      <h1 styleName='heading'>
        The Official 2016 Andalucian Tapas Tally
      </h1>
    </header>
  );
}

export default CSSModules(Header, styles);
