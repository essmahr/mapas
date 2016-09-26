import React from 'react';
import { connect } from 'react-redux';

import { setActivePin } from '../actions';

import TapasPin from '../components/TapasPin/TapasPin';

const Pin = function(props) {
  const onClick = function() {
    props.setActivePin(props.id);
  }

  return (
    <TapasPin onClick={onClick} />
  );
}

function mapStateToProps(state) {
  return {
    isActive: state.isActive,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    setActivePin: (id) => {
      dispatch(setActivePin(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pin)


