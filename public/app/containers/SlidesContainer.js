import React from 'react';
import { connect } from 'react-redux';
// import TapasSlides from '../components/TapasSlides/TapasSlides';

import { setCurrentTapa } from '../actions';

class SlidesContainer extends React.Component {
  onNextSlide(evt) {
    const {currentTapas, tapas, changeTapa} = this.props;
    const newIndex = (currentTapas + 1) === tapas.length
      ? 0
      : currentTapas + 1;

    changeTapa(newIndex);
  }

  onPrevSlide(evt) {
    const {currentTapas, tapas, changeTapas} = this.props;
    const newIndex = currentTapas === 0
      ? tapas.length - 1
      : currentTapas - 1;

    changeTapa(newIndex);
  }

  handleKeyDown(evt) {
    switch (evt.key) {
      case 'ArrowRight':
        this.onNextSlide();
        break;
      case 'ArrowDown':
        this.onNextSlide();
        break;
      case 'ArrowLeft':
        this.onPrevSlide();
        break;
      case 'ArrowUp':
        this.onPrevSlide();
        break;
    }
  }

  render() {
    return null;
  }
}

function mapStateToProps(state) {
  return {
    tapas: state.pins[state.currentPin].tapas,
    currentTapa: state.currentTapa,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTapa: (index) => {
      dispatch(setCurrentTapa(index));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SlidesContainer)
