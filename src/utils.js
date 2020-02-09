const debounce = (func, interval) => {
    let timeoutId;
    return (...args) => {
  if (timeoutId) {
    clearTimeout(timeoutId);
  }
  timeoutId = setTimeout(() => {
    func.apply(null, args);
  }, interval)
    }
  }