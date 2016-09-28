import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TapasSlides.scss';

class TapasSlides extends React.Component {
  componentDidMount() {
    this.el.focus();
  }

  render() {
    return (
      <div
        ref={el => this.el = el}
        tabIndex="-1"
        styleName='slides'
        onKeyDown={this.props.onKeyDown}>
        {this.props.currentTapas}
      </div>
    );
  }
}

export default CSSModules(TapasSlides, styles);
