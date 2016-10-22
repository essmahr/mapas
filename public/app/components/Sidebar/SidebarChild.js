import React from 'react';
import CSSModules from 'react-css-modules';

import ListNav from '../ListNav/ListNav';
import TapasListItem from '../TapasListItem/TapasListItem';
import styles from './Sidebar.scss';

class SidebarChild extends React.Component {

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
      <section styleName='sidebar'>
        <div styleName="sidebar-inner">
          <header styleName='heading'>
            <h1 styleName='title'>{place.title}</h1>
            <h2 styleName='detail'>Visited <VisitCount count={visitCount}/></h2>
            <span styleName='separator'>/</span>
            <h2 styleName='detail'><strong>{place.tapas.length}</strong> tapa{place.tapas.length > 1 ? 's' : ''} total</h2>
          </header>
          <div styleName='list'>
            <div styleName='scroll-container'>
              {this.list()}
            </div>
          </div>
        </div>
        <ListNav onNavClick={this.props.onNavClick}/>
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

export default CSSModules(SidebarChild, styles);
