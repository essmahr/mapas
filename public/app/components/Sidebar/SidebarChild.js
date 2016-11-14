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

  isFirst(pindex) {
    return pindex === 0;
  }

  isLast(pindex) {
    return pindex === this.props.pinsCount - 1;
  }

  getDirection(currentPin, nextPin) {
    if (this.isFirst(currentPin) && this.isLast(nextPin)) {
      return 'backward';
    }

    if (this.isFirst(nextPin) && this.isLast(currentPin)) {
      return 'forward';
    }

    return currentPin < nextPin ? 'forward' : 'backward';
  }

  componentWillReceiveProps(nextProps) {
    const direction = this.getDirection(
      this.props.currentPin,
      nextProps.currentPin
    );

    this.setState({ direction });
  }

  getVisitCount() {
    return this.props.place.tapas
      .map(tapa => tapa.date)
      .filter((item, pos, self) => self.indexOf(item) === pos)
      .length;
  }

  pinIcon() {
    return (
      <svg width='10' height='10' viewBox='0 0 32 32'>
        <path d='M16 0c-5.523 0-10 4.477-10 10 0 10 10 22 10 22s10-12 10-22c0-5.523-4.477-10-10-10zM16 16c-3.314 0-6-2.686-6-6s2.686-6 6-6 6 2.686 6 6-2.686 6-6 6z'></path>
      </svg>
    );
  }

  render() {
    const place = this.props.place;
    const transitionClasses = mapTransitionClasses(`slider-${this.state.direction}`);

    return (
      <section styleName='sidebar'>
        <div styleName="sidebar-inner">
          <CSSTransitionGroup
            transitionName={transitionClasses}
            transitionEnterTimeout={400}
            transitionLeaveTimeout={400}
            styleName='slider-outer'
            component='div'>
            <div styleName='slider-inner' key={place.title}>
              <header styleName='heading'>
                <h1 styleName='title'>{place.title}</h1>
                <h2 styleName='location'>{this.pinIcon()} {place.where}</h2>
                <span styleName='separator'>/</span>
                <h3 styleName='detail'>Visited <VisitCount count={this.getVisitCount()}/></h3>
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
