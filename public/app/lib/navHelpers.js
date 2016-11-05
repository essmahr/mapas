function onNextPin(props) {
  const {currentPin, pins, setCurrentPin} = props;
  const newIndex = (currentPin + 1) === pins.length
    ? 0
    : currentPin + 1;

  setCurrentPin(newIndex);
}

function onPrevPin(props) {
  const {currentPin, pins, setCurrentPin} = props;
  const newIndex = currentPin === 0
    ? pins.length - 1
    : currentPin - 1;

  setCurrentPin(newIndex);
}

function onClose(props) {
  if (props.aboutVisible) {
    props.toggleAboutState();
  } else {
    props.setCurrentPin(null);
  }
}

function handleKeyDown(evt) {
  if (this.props.currentPin === null) return;

  switch (evt.keyCode) {
    case 39: // right
      onNextPin(this.props);
      break;
    case 40: // down
      onNextPin(this.props);
      break;
    case 37: // left
      onPrevPin(this.props);
      break;
    case 38: // up
      onPrevPin(this.props);
      break;
    case 27: // escape
      onClose(this.props);
  }
}

export default {
  onPrevPin,
  onNextPin,
  onClose,
  handleKeyDown,
}
