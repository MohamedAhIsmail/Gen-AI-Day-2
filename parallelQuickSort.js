/**
 * QuickSort algorithm implementation using Web Workers for parallelization.
 * @param {number[]} arr - The array to be sorted.
 * @returns {Promise<number[]>} - A promise that resolves to the sorted array.
 */
function parallelQuickSort(arr) {
  return new Promise((resolve) => {
    const worker = new Worker("worker.js");
    worker.postMessage(arr);
    worker.onmessage = (event) => {
      resolve(event.data);
    };
  });
}
