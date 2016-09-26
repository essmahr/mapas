import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './AppWrapper.scss';

class AppContainer extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div styleName='container'>
        {this.props.children}
      </div>
    );
  }
}

export default CSSModules(AppContainer, styles);
