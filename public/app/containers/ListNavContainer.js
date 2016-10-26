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

  return (
    <ListNav
      onNavClick={handleNavClick}
      visible={props.currentPin !== null} />
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
