import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPin } from '../actions';

import TapasPin from '../components/TapasPin/TapasPin';

const Pin = function(props) {
  const onClick = function() {
    props.setCurrentPin(props.id);
  }

  return (
    <TapasPin onClick={onClick} isActive={props.isActive} />
  );
}

function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {
    setCurrentPin: (id) => {
      dispatch(setCurrentPin(id));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Pin)


