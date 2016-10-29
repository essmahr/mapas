import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './About.scss';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { mapTransitionClasses } from '../../lib/helpers';

const About = function(props) {
  const transitionClasses = mapTransitionClasses('about');

  const overlay = function() {
    return (
      <article styleName='about'>
        <button styleName='close' onClick={props.onClose}>&times;</button>
        <div styleName='about-inner'>
          <div styleName='scroll-container'>
            <h2 styleName='heading'>Tapas in Andalucia</h2>
            <p>
              <strong>Tapas are two- to three-bite traditional snacks served at bars, cafes and
              restaurants throughout Spain, alongside a beverage.</strong> While tapas are increasingly
              becoming a section on the menu (and therefore a line item on your bill), the province of
              Andalucia &mdash; and Granada in particular &mdash; has somehow clung to the more classic
              arrangement of tapas being free: with the purchase of any drink, you can expect a complementary
              plate of food. A glass of wine or beer in the city will run you about two Euros (under three
              bucks), so it's a bargain. We're a little baffled by the economics of it all.
            </p>
            <p>
              These tapas are at the discretion of the kitchen, and can be hit-and-miss, but
              that's part of the fun.
            </p>
          </div>
        </div>
      </article>
    );
  };

  return (
    <CSSTransitionGroup
      transitionName={transitionClasses}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={600}>
        {props.visible ? overlay() : null}
    </CSSTransitionGroup>
  );

}

export default CSSModules(About, styles);
