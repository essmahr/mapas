function getPinCoords(pin) {
  return {
    lat: pin.latitude,
    lng: pin.longitude,
  }
}

function mapTransitionClasses(styles, className) {
  return {
    appear: styles[`${className}-enter`],
    appearActive: styles[`${className}-enter-active`],
    enter: styles[`${className}-enter`],
    enterActive: styles[`${className}-enter-active`],
    leave: styles[`${className}-leave`],
    leaveActive: styles[`${className}-leave-active`],
  }
}

export {
  getPinCoords,
  mapTransitionClasses,
}
