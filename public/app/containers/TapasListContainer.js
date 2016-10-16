import React from 'react';
import { connect } from 'react-redux';

import TapasList from '../components/TapasList/TapasList';

import { setCurrentPin } from '../actions';

class TapasListContainer extends React.Component {
  constructor(props) {
    super(props);

    // preserve our `this` scope
    this.handleKeyDown = this.handleKeyDown.bind(this);
  }

  onNextPin(evt) {
    const {currentPin, pins, changePin} = this.props;
    const newIndex = (currentPin + 1) === pins.length
      ? 0
      : currentPin + 1;

    changePin(newIndex);
  }

  onPrevPin(evt) {
    const {currentPin, pins, changePin} = this.props;
    const newIndex = currentPin === 0
      ? pins.length - 1
      : currentPin - 1;

    changePin(newIndex);
  }

  onClose() {
    this.props.changePin(null);
  }

  handleKeyDown(evt) {
    switch (evt.key) {
      case 'ArrowRight':
        this.onNextPin();
        break;
      case 'ArrowDown':
        this.onNextPin();
        break;
      case 'ArrowLeft':
        this.onPrevPin();
        break;
      case 'ArrowUp':
        this.onPrevPin();
        break;
      case 'Escape':
        this.onClose();
    }
  }

  handleNavClick(target) {
    switch (target) {
      case 'next':
        this.onNextPin();
        break;
      case 'prev':
        this.onPrevPin();
        break;
      case 'close':
        this.onClose();
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  render() {
    return (
      <TapasList place={this.props.place} onNavClick={this.handleNavClick.bind(this)} />
    );
  }
}

function mapStateToProps(state) {
  return {
    pins: state.pins,
    currentPin: state.currentPin,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changePin: (index) => {
      dispatch(setCurrentPin(index));
    }
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TapasListContainer)
