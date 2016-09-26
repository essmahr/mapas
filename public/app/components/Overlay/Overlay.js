import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Overlay.scss';

class Overlay extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName='overlay'>Overlay!</div>
    );
  }
}

export default CSSModules(Overlay, styles);
