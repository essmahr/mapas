import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TapasList.scss';
import TapasListItem from '../TapasListItem/TapasListItem';

class TapasList extends React.Component {

  onClick(index) {
    this.props.onTapaSelect(index);
  }

  list() {
    return this.props.place.tapas.map((tapa, idx) => {
      return <TapasListItem key={idx} tapa={tapa} />
    });
  }

  visitCount() {
    return this.props.place.tapas
      .map(tapa => tapa.date)
      .filter((item, pos, self) => self.indexOf(item) === pos)
      .length;
  }

  render() {
    const place = this.props.place;
    const visitCount = this.visitCount();

    return (
      <section styleName='list-container'>
        <ListNav onNavClick={this.props.onNavClick} styles={this.props.styles} />
        <header styleName='list-heading'>
          <h1 styleName='title'>{place.title}</h1>
          <h2 styleName='detail'>Visited <VisitCount count={visitCount}/></h2>
          <span styleName='separator'>/</span>
          <h2 styleName='detail'><strong>{place.tapas.length}</strong> tapa{place.tapas.length > 1 ? 's' : ''} total</h2>
          </header>
        <div styleName='list'>
          {this.list()}
        </div>
      </section>
    );
  }
}

function ListNav(props) {
  const strokeWidth = 5;

  return (
    <nav className={props.styles['nav']}>
      <button className={props.styles['prev']} onClick={() => props.onNavClick('prev')}>
        <svg width="36px" height="36px" viewBox="0 0 36 36">
          <polyline fill="none" points="26.5,1 9.5,18 26.5,35" stroke="#000000" strokeWidth={strokeWidth} strokeLinejoin="bevel" strokeMiterlimit="10"/>
        </svg>
      </button>
      <button className={props.styles['next']} onClick={() => props.onNavClick('next')}>
        <svg width="36px" height="36px" viewBox="0 0 36 36">
          <polyline fill="none" points="9.5,35 26.5,18 9.5,1" stroke="#000000" strokeWidth={strokeWidth} strokeLinejoin="bevel" strokeMiterlimit="10"/>
        </svg>
      </button>
      <button className={props.styles['close']} onClick={() => props.onNavClick('close')}>
        <svg width="36px" height="36px" viewBox="0 0 36 36">
          <line fill="none" stroke="#000000" strokeWidth={strokeWidth} strokeMiterlimit="10" x1="5" y1="5" x2="31" y2="31"/>
          <line fill="none" stroke="#000000" strokeWidth={strokeWidth} strokeMiterlimit="10" x1="5" y1="31" x2="31" y2="5"/>
        </svg>
      </button>
    </nav>
  );
}

function VisitCount(props) {
  const count = props.count;

  if (count === 1) {
    return (<strong>once</strong>);
  }

  if (count === 2) {
    return (<strong>twice</strong>);
  }

  return (
    <span>
      <strong>{count}</strong> times
    </span>
  );
}

export default CSSModules(TapasList, styles);
