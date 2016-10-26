import React from 'react';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import ListNavContainer from '../../containers/ListNavContainer';
import TapasList from './TapasList';
import styles from './Sidebar.scss';
import { mapTransitionClasses } from '../../lib/helpers';

class SidebarChild extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      direction: 'forward'
    }
  }

  componentWillReceiveProps(nextProps) {
    const nextPin = nextProps.currentPin;
    const direction = nextPin > this.props.currentPin || nextPin === 0
      ? 'forward'
      : 'backward';

    this.setState({ direction });
  }

  getVisitCount() {
    return this.props.place.tapas
      .map(tapa => tapa.date)
      .filter((item, pos, self) => self.indexOf(item) === pos)
      .length;
  }

  render() {
    const place = this.props.place;
    const transitionClasses = mapTransitionClasses(`slider-${this.state.direction}`);

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
                <h2 styleName='detail'>Visited <VisitCount count={this.getVisitCount()}/></h2>
                <span styleName='separator'>/</span>
                <h2 styleName='detail'>
                  <strong>{place.tapas.length}</strong> tapa{place.tapas.length > 1 ? 's' : ''} total
                </h2>
              </header>
              <TapasList tapas={place.tapas} styles={this.props.styles}/>
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
