import React from 'react';
import CSSModules from 'react-css-modules';
import styles from './TapasList.scss';
import TapasListItem from '../TapasListItem/TapasListItem';
import ListNav from '../ListNav/ListNav';

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
        <ListNav onNavClick={this.props.onNavClick}/>
        <header styleName='heading'>
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
