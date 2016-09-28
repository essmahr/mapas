import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './Overlay.scss';
import SlidesContainer from '../../containers/SlidesContainer';

class Overlay extends React.Component {
  static propTypes = {
    name: React.PropTypes.string,
  };

  constructor(props) {
    super(props);
  }

  render() {
    const place = this.props.place;

    return (
      <section styleName='overlay'>
        <header styleName='header'>
          <h1>{place.title}</h1>
        </header>
        <SlidesContainer tapas={place.tapas} />
      </section>
    );
  }
}

export default CSSModules(Overlay, styles);
