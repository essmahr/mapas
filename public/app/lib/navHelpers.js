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

  switch (evt.key) {
    case 'ArrowRight':
      onNextPin(this.props);
      break;
    case 'ArrowDown':
      onNextPin(this.props);
      break;
    case 'ArrowLeft':
      onPrevPin(this.props);
      break;
    case 'ArrowUp':
      onPrevPin(this.props);
      break;
    case 'Escape':
      onClose(this.props);
  }
}

export default {
  onPrevPin,
  onNextPin,
  onClose,
  handleKeyDown,
}
