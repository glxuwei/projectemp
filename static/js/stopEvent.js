let stopPropagation = e => {
  if (e.stopPropagation) {
    e.stopPropagation();
    stopPropagation = e => {
      e.stopPropagation();
    }
  } else {
    e.cancelBubble = true;
    stopPropagation = e => {
      e.cancelBubble = true;
    }
  }
}

let preventDefault = e => {
  if (e.preventDefault) {
    e.preventDefault();
  } else {
    e.returnValue = false;
  }
}

const stopEvent = e => {
  stopPropagation(e);
  preventDefault(e);
}

export {stopEvent}

