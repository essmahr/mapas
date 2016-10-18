import React from 'react';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { mapTransitionClasses } from '../../lib/helpers';

import SidebarChild from './SidebarChild';

import styles from './Sidebar.scss';

class SidebarParent extends React.Component {

  firstChild(props) {
    var childrenArray = React.Children.toArray(props.children);
    return childrenArray[0] || null;
  }

  render() {
    const {styles, place} = this.props;

    const transitionClasses = mapTransitionClasses(styles, 'sidebar');

    return (
        <CSSTransitionGroup
          transitionName={transitionClasses}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component={this.firstChild}>
            {place ? <SidebarChild {...this.props} /> : null}
          </CSSTransitionGroup>
    );
  }
}

export default CSSModules(SidebarParent, styles);
