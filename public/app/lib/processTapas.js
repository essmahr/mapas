function sortTapas(pins) {
  return pins.map((pin) => {
    pin.tapas = pin.tapas.sort((a, b) => {
      if (a.date < b.date)
        return 1;
      if (a.date > b.date)
        return -1;
      return 0;
    });

    return pin;
  });
}

function sortPins(pins) {
  return pins.sort((a, b) => {
    const date = a.tapas[0].date;
    const compareDate = b.tapas[0].date;
    if (date < compareDate)
      return 1;
    if (date > compareDate)
      return -1;
    return 0;
  });
}

export default function processTapas(json) {
  return sortPins(sortTapas(json));
}
