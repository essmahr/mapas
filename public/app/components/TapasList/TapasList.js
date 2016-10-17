import React from 'react';
import CSSModules from 'react-css-modules';
import CSSTranstionGroup from 'react-addons-css-transition-group';

import TapasListItem from '../TapasListItem/TapasListItem';
import ListNav from '../ListNav/ListNav';

import styles from './TapasList.scss';
import transitions from '../../../styles/transitions.scss';

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

  firstChild(props) {
    var childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  sidebar(place) {
    const visitCount = this.visitCount();

    return (
      <section styleName='sidebar'>
        <ListNav onNavClick={this.props.onNavClick}/>
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
      </section>
    );
  }

  render() {
    const {styles, place} = this.props;

    const transitionClasses = {
      appear: styles['sidebar-enter'],
      appearActive: styles['sidebar-enter-active'],
      enter: styles['sidebar-enter'],
      enterActive: styles['sidebar-enter-active'],
      leave: styles['sidebar-leave'],
      leaveActive: styles['sidebar-leave-active'],
    }

    return (
        <CSSTranstionGroup
          transitionName={transitionClasses}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component={this.firstChild}>
            {place ? this.sidebar(place) : null}
          </CSSTranstionGroup>
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
