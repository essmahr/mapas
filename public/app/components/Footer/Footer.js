import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Footer.scss';

/**
 * Presentational component
 */
const Footer = CSSModules(function(props) {
  const buttonClass = props.pinActive
    ? 'left-hidden'
    : 'left'

  return (
    <div styleName='footer'>
      <div styleName={buttonClass}>
        <button styleName='about-toggle' onClick={props.onAboutClick}>
          { props.aboutVisible ? 'OK Thanks' : 'What are Tapas?' }
        </button>
      </div>
      <div styleName='right'>
        a <a href='http://smahr.net'>smahr.net</a> project
        <span className={styles.sep}>|</span>
        <a href='https://github.com/essmahr/mapas'>github</a>
      </div>
    </div>
  );
}, styles);

export default Footer;
