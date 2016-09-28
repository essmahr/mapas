import React from 'react';
import { connect } from 'react-redux';
import TapasSlides from '../components/TapasSlides/TapasSlides';

import { setCurrentTapas } from '../actions';

class SlidesContainer extends React.Component {
  onNextSlide(evt) {
    const {currentTapas, tapas, changeTapas} = this.props;
    const newIndex = (currentTapas + 1) === tapas.length
      ? 0
      : currentTapas + 1;

    changeTapas(newIndex);
  }

  onPrevSlide(evt) {
    const {currentTapas, tapas, changeTapas} = this.props;
    const newIndex = currentTapas === 0
      ? tapas.length - 1
      : currentTapas - 1;

    changeTapas(newIndex);
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
    return (
      <TapasSlides
        onKeyDown={this.handleKeyDown.bind(this)}
        slides={this.props.tapas}
        currentTapas={this.props.currentTapas} />
    );
  }
}

function mapStateToProps(state) {
  return {
    tapas: state.pins[state.currentPin].tapas,
    currentTapas: state.currentTapas,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeTapas: (index) => {
      dispatch(setCurrentTapas(index));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SlidesContainer)
