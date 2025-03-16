const express = require("express");
const app = express();
const port = 4000;

app.use(express.json());

function quickSort(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

function partition(arr, left, right) {
  const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
  const pivotValue = arr[pivotIndex];
  [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
  let storeIndex = left;

  for (let i = left; i < right; i++) {
    if (arr[i] < pivotValue) {
      [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
      storeIndex++;
    }
  }
  [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
  return storeIndex;
}

app.post("/quicksort", (req, res) => {
  const { array } = req.body;
  if (!Array.isArray(array) || array.some(isNaN)) {
    return res.status(400).json({ error: "Invalid input array" });
  }
  const sortedArray = quickSort([...array]);
  res.json({ sortedArray });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
