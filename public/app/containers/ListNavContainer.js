import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPin } from '../actions';
import navHelpers from '../lib/navHelpers';
import ListNav from '../components/ListNav/ListNav';


const ListNavContainer = function(props) {

  function handleNavClick(target) {
    switch (target) {
      case 'next':
        navHelpers.onNextPin(props);
        break;
      case 'prev':
        navHelpers.onPrevPin(props);
        break;
      case 'close':
        navHelpers.onClose(props);
    }
  }

  const showNav = props.currentPin !== null && !props.hidden;

  return (
    <ListNav onNavClick={handleNavClick} visible={showNav} />
    );
};

function mapStateToProps(state) {
  return {
    pins: state.pins,
    currentPin: state.currentPin,
  };
}

export default connect(
  mapStateToProps,
  { setCurrentPin }
)(ListNavContainer)
