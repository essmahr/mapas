import React from 'react';
import CSSModules from 'react-css-modules';
import dateformat from 'dateformat';

import { DB_IMAGES_DIR } from '../../constants/paths';

import ImageLoader from '../ImageLoader/ImageLoader';

import styles from './TapasListItem.scss';


const Tapa = function(props) {
  const {title, where, date, image, rating} = props.tapa;
  const eatenDate = dateformat(date, 'dddd, mmmm d');

  const imagePath = DB_IMAGES_DIR + image;

  return (
    <div styleName='container'>
      <div styleName='image'>
        <ImageLoader src={imagePath} />

        <Rating rating={rating} styles={props.styles} />
      </div>
      <h1 styleName='title'>{title}</h1>
      <div styleName='date'>{eatenDate}</div>
    </div>
  );
}

const FullStar = function(props) {
  const className = props.filled ? 'star-full' : 'star-empty';
  return (
    <svg viewBox="0 0 18 18" className={props.styles[className]}>
      <path d="M9,14.3c0,0,2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0s0.2-0.3,0.2-0.5c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8C9.4,1.2,9.2,1,9,1S8.6,1.2,8.5,1.3C7.7,3.3,6.4,6.2,6.4,6.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3s0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2c0,0.2,0,0.4,0.2,0.5C4,17,4.2,17,4.4,16.9C6.2,15.9,9,14.3,9,14.3"/>
    </svg>
  );
}

const HalfStar = function(props) {
  return (
    <svg viewBox="0 0 18 18" className={props.styles['star-empty']}>
      <path d="M9,14.3c0,0,2.8,1.6,4.6,2.6c0.2,0.1,0.4,0.1,0.5,0s0.2-0.3,0.2-0.5c-0.4-2.1-1.1-5.2-1.1-5.2s2.4-2.1,3.9-3.6c0.1-0.1,0.2-0.3,0.1-0.5s-0.2-0.3-0.4-0.3c-2.1-0.2-5.3-0.6-5.3-0.6s-1.3-2.9-2.2-4.8C9.4,1.2,9.2,1,9,1L9,14.3z"/>
      <path className={props.styles['full-half']} d="M9,1C8.8,1,8.6,1.2,8.5,1.3C7.7,3.3,6.4,6.2,6.4,6.2c0,0-3.2,0.4-5.3,0.6c-0.2,0-0.4,0.1-0.4,0.3s0,0.4,0.1,0.5c1.6,1.4,3.9,3.6,3.9,3.6c0,0-0.6,3.1-1.1,5.2c0,0.2,0,0.4,0.2,0.5C4,17,4.2,17,4.4,16.9c1.8-1,4.6-2.6,4.6-2.6L9,1z"/>
    </svg>
  );
}

const Rating = function(props) {
  const rating = props.rating;

  const stars = [...Array(5)].map((_, index) => {
    const isHalfStar = Math.floor(rating) === index && (rating - index) % 1 !== 0;

    if (isHalfStar) {
      return (<HalfStar key={index} styles={props.styles} />);
    } else {
      return (<FullStar key={index} filled={index < rating} styles={props.styles} />)
    }
  });

  return (
    <div className={props.styles['rating-container']}>
      {stars}
    </div>
  )
}

export default CSSModules(Tapa, styles);
