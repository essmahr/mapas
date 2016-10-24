import React from 'react';
import CSSModules from 'react-css-modules';
import CSSTransitionGroup from 'react-addons-css-transition-group';
import { mapTransitionClasses } from '../../lib/helpers';

import SidebarChild from './SidebarChild';

import styles from './Sidebar.scss';

function firstChild(props) {
  var childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

const SidebarParent = function(props) {
  const {styles, place} = props;
  const transitionClasses = mapTransitionClasses('sidebar');

  return (
    <CSSTransitionGroup
      transitionName={transitionClasses}
      transitionEnterTimeout={1000}
      transitionLeaveTimeout={1000}
      component={firstChild}>
        {place ? <SidebarChild {...props} /> : null}
      </CSSTransitionGroup>
  );
}

export default CSSModules(SidebarParent, styles);
