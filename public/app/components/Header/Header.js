import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

const Header = function(props) {
  return (
    <header styleName='header'>
      <h1 styleName='heading'>Mapas</h1>
    </header>
  );
}

export default CSSModules(Header, styles);
