import React from 'react';
import CSSModules from 'react-css-modules';
import dateformat from 'dateformat';

import ImageLoader from '../ImageLoader/ImageLoader';

import styles from './TapasListItem.scss';

const Tapa  = function(props) {
  const {title, date, image, rating} = props.tapa;
  const eatenDate = dateformat(date, 'dddd, mmmm d');

  return (
    <div styleName='container'>
      <div styleName='image'>
        <ImageLoader src={image} />

        <div styleName='rating-container'>
          <span styleName='rating'>{rating}</span>
          <span styleName="slash">/</span>
          <span styleName="outof">5</span>
        </div>
      </div>
      <h1 styleName='title'>{title}</h1>
      <div styleName='date'>{eatenDate}</div>
    </div>
  );
}

export default CSSModules(Tapa, styles);
