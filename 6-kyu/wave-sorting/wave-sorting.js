function waveSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) {
    if ((i % 2 === 0 && arr[i] < arr[i + 1]) ||
        (i % 2 === 1 && arr[i] > arr[i + 1])) {
      [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
    }
  }
}
​