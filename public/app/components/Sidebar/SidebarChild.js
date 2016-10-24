import React from 'react';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ListNavContainer from '../../containers/ListNavContainer';
import TapasListItem from '../TapasListItem/TapasListItem';
import styles from './Sidebar.scss';
import { mapTransitionClasses } from '../../lib/helpers';

class SidebarChild extends React.Component {

  list() {
    return this.props.place.tapas.map((tapa, idx) => {
      return <TapasListItem key={idx} tapa={tapa} />
    });
  }

  firstChild(props) {
    var childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
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
    const transitionClasses = mapTransitionClasses('slider');

    return (
      <section styleName='sidebar'>
        <div styleName="sidebar-inner">
          <CSSTransitionGroup
            transitionName={transitionClasses}
            transitionEnterTimeout={650}
            transitionLeaveTimeout={650}
            styleName='slider-outer'
            component='div'>
            <div styleName='slider-inner' key={place.title}>
              <header styleName='heading'>
                <h1 styleName='title'>{place.title}</h1>
                <h2 styleName='detail'>Visited <VisitCount count={visitCount}/></h2>
                <span styleName='separator'>/</span>
                <h2 styleName='detail'>
                  <strong>{place.tapas.length}</strong> tapa{place.tapas.length > 1 ? 's' : ''} total
                </h2>
              </header>
              <div styleName='list' key={place.title}>
                <div styleName='scroll-container'>
                  {this.list()}
                </div>
              </div>
            </div>
          </CSSTransitionGroup>
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

export default CSSModules(SidebarChild, styles);
