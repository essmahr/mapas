function getPinCoords(pin) {
  if (!pin) return false;

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

function filterPins(pins, location) {
  return pins
    .filter((pin) => {
      return pin.where === location
    })
    .map((pin) => {
      return {
        lat: pin.latitude,
        lng: pin.longitude,
      }
    });
}

function getBoundsByLocation(pins, location) {

  const latLongs = filterPins(pins, location);

  let southEast = {lat: Infinity, lng: -Infinity};
  let northWest = {lat: -Infinity, lng: Infinity};

  for (const pin of latLongs) {
    if (pin.lat > northWest.lat) {
      northWest.lat = pin.lat;
    }
    if (pin.lng < northWest.lng) {
      northWest.lng = pin.lng;
    }
    if (pin.lat < southEast.lat) {
      southEast.lat = pin.lat;
    }
    if (pin.lng > southEast.lng) {
      southEast.lng = pin.lng;
    }
  }

  return {
    nw: northWest,
    se: southEast,
  }
}

export {
  getPinCoords,
  getBoundsByLocation,
  mapTransitionClasses,
}
