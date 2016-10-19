function getPinCoords(pin) {
  return {
    lat: pin.latitude,
    lng: pin.longitude,
  }
}

function mapTransitionClasses(className) {
  return {
    appear: `${className}-enter`,
    appearActive: `${className}-enter-active`,
    enter: `${className}-enter`,
    enterActive: `${className}-enter-active`,
    leave: `${className}-leave`,
    leaveActive: `${className}-leave-active`,
  }
}

export {
  getPinCoords,
  mapTransitionClasses,
}
