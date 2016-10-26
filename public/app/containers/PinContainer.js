import React from 'react';
import { connect } from 'react-redux';

import { setCurrentPin } from '../actions';

import TapasPin from '../components/TapasPin/TapasPin';

const Pin = function(props) {
  const onClick = function() {
    props.dispatch(setCurrentPin(props.id));
  }

  return (
    <TapasPin onClick={onClick} isActive={props.isActive} />
  );
}

export default connect()(Pin);
