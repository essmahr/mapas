import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Header.scss';

const Header = function(props) {
  return (
    <header styleName='header'>
      <svg styleName='icon' xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'>
        <path d='M7.085 82.206l32.057-30.11-5.032-5.423a15.08 15.08 0 0 1-15.787-2.667 44.383 44.383 0 0 1-12.81-21.208 10.415 10.415 0 0 1 2.88-10.917 10.407 10.407 0 0 1 11.13-1.874A46.95 46.95 0 0 1 38.3 21.33a15.308 15.308 0 0 1 3.83 17.58l5.536 5.18 10.83-10.17a13.43 13.43 0 0 1 3.463-14.315L75.26 6.27a3.337 3.337 0 0 1 5.58 1.51 3.312 3.312 0 0 1-.87 3.21L66.668 24.322a1.672 1.672 0 0 0-.428 1.613 1.668 1.668 0 0 0 2.79.738l13.355-13.352a3.333 3.333 0 0 1 4.715 4.71l-13.344 13.35a1.66 1.66 0 0 0-.012 2.342 1.664 1.664 0 0 0 2.343.035l13.21-13.353a3.335 3.335 0 0 1 4.76 4.668L80.79 38.473a13.28 13.28 0 0 1-14.29 3.45l-9.92 10.495 30.444 28.465a7.752 7.752 0 0 1-3.98 13.234c-2.873.516-4.964.304-6.726-2.02l-28.38-30.538-28.782 30.45a7.78 7.78 0 0 1-12.07-9.802'/>
      </svg>
      <h1 styleName='heading'>
        The Official Scott &amp; Alanna<br/> Andalucian Tapas Tally 2016
      </h1>
    </header>
  );
}

export default CSSModules(Header, styles);
