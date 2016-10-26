import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './style.scss';

function spinner(styles, loaded) {
  const className = loaded ? 'spinner-loaded' : 'spinner';

  return (
    <div className={styles[className]}>
      <svg viewBox="0 0 100 100" className={styles['spoon']}>
        <path d="M33.9 46.9c-5.3 2.2-11.5 1.2-15.8-2.7-6.2-5.7-10.6-13-12.8-21.2-1.3-3.8-.1-8.1 2.9-10.9 3-2.8 7.4-3.5 11.1-1.9 7.1 2.2 13.5 6.1 18.8 11.3 4.9 4.4 6.5 11.5 3.8 17.6l44.9 42c3.1 3 3.2 7.9.2 11-1.1 1.2-2.6 2-4.2 2.3-2.9.5-5 .3-6.7-2L33.9 46.9z"/>
      </svg>
      <svg viewBox="0 0 100 100" className={styles['fork']}>
        <path d="M58.8 33.9c-1.8-5-.4-10.7 3.5-14.3L75.5 6.3c1.3-1.3 3.4-1.3 4.7 0 .4.4.7.9.9 1.5.3 1.1 0 2.4-.9 3.2L66.9 24.3c-.4.4-.6 1-.4 1.6.2.9 1.2 1.4 2 1.2.3-.1.5-.2.7-.4l13.4-13.4c1.3-1.3 3.4-1.2 4.7.1 1.2 1.3 1.2 3.3 0 4.6L74 31.4c-.6.6-.7 1.7 0 2.3.6.7 1.7.7 2.3 0l13.2-13.4c1.3-1.3 3.4-1.2 4.7.1 1.2 1.3 1.2 3.3 0 4.6L81.1 38.5c-3.6 3.9-9.3 5.3-14.3 3.5L19.4 92c-2.8 3.2-7.7 3.6-11 .7-3.1-2.7-3.5-7.3-1.1-10.5l51.5-48.3z"/>
      </svg>
    </div>
  );
}

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
        {spinner(this.props.styles, this.state.imgLoaded)}
      </div>
    );
  }
}

export default CSSModules(ImageLoader, styles);
