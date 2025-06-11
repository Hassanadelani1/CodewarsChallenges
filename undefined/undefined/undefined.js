const debounce = (fn, delay, immediate) => {
  let timeout;
  return function (...args) {
    const context = this;
​
    const callNow = immediate && !timeout;
​
    clearTimeout(timeout);
​
    timeout = setTimeout(() => {
      timeout = null;
      if (!immediate) {
        fn.apply(context, args);
      }
    }, delay);
​
    if (callNow) {
      fn.apply(context, args);
    }
  };
};
​