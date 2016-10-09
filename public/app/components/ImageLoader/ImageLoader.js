import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

class ImageLoader extends React.Component {
  constructor(props) {
    super(props);

    const imgLoaded = this.isImgCached();

    this.state = {
      imgLoaded,
    }
  }

  onImgLoad() {
    this.setState({
      imgLoaded: true,
    });
  }

  isImgCached() {
    const image = new Image();
    image.src = this.props.src;

    return image.complete;
  }

  render() {
    const src = this.props.src;

    const styleName = !src
      ? 'empty'
      : this.state.imgLoaded
      ? 'loaded'
      : 'unloaded';

    const style = {
      backgroundImage: `url(${src})`,
    }

    return (
      <div styleName='image-container'>
        <div styleName={styleName} style={style}></div>
        <img src={src} onLoad={this.onImgLoad.bind(this)} />
      </div>
    );
  }
}

export default CSSModules(ImageLoader, styles);
