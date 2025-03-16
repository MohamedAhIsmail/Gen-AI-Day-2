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

function startSorting() {
  const input = document.getElementById("arrayInput").value;
  const array = input.split(",").map(Number);
  if (array.length === 0 || array.some(isNaN)) {
    document.getElementById("sortedArray").textContent = "";
    document.getElementById("benchmarkResults").textContent = "";
    return;
  }

  // Sort the array
  const sortedArray = quickSort([...array]);
  document.getElementById("sortedArray").textContent = sortedArray.join(", ");

  // Run benchmark
  runBenchmark(array);

  // Visualize sorting
  visualizeSort(array);
}

function runBenchmark(array) {
  const iterations = 1000;
  let quickSortTime = 0;
  let builtInSortTime = 0;

  for (let i = 0; i < iterations; i++) {
    const quickSortArray = [...array];
    const builtInSortArray = [...array];

    // Benchmark QuickSort
    const quickSortStart = performance.now();
    quickSort(quickSortArray);
    const quickSortEnd = performance.now();
    quickSortTime += quickSortEnd - quickSortStart;

    // Benchmark Built-in Sort
    const builtInSortStart = performance.now();
    builtInSortArray.sort((a, b) => a - b);
    const builtInSortEnd = performance.now();
    builtInSortTime += builtInSortEnd - builtInSortStart;
  }

  quickSortTime /= iterations;
  builtInSortTime /= iterations;

  const results = `
        QuickSort Time: ${quickSortTime.toFixed(4)} ms<br>
        Built-in Sort Time: ${builtInSortTime.toFixed(4)} ms
    `;
  document.getElementById("benchmarkResults").innerHTML = results;
}

function visualizeSort(array) {
  const canvas = document.getElementById("sortingCanvas");
  const ctx = canvas.getContext("2d");
  const width = canvas.width;
  const height = canvas.height;
  const barWidth = width / array.length;

  function drawArray(arr, colors) {
    ctx.clearRect(0, 0, width, height);
    arr.forEach((value, index) => {
      const barHeight = (value / Math.max(...arr)) * height;
      ctx.fillStyle = colors[index] || "blue";
      ctx.fillRect(index * barWidth, height - barHeight, barWidth, barHeight);
    });
  }

  async function quickSortVisual(
    arr,
    left = 0,
    right = arr.length - 1,
    colors = []
  ) {
    if (left < right) {
      const pivotIndex = await partitionVisual(arr, left, right, colors);
      await quickSortVisual(arr, left, pivotIndex - 1, colors);
      await quickSortVisual(arr, pivotIndex + 1, right, colors);
    }
    return arr;
  }

  async function partitionVisual(arr, left, right, colors) {
    const pivotIndex = Math.floor(Math.random() * (right - left + 1)) + left;
    const pivotValue = arr[pivotIndex];
    [arr[pivotIndex], arr[right]] = [arr[right], arr[pivotIndex]];
    let storeIndex = left;

    for (let i = left; i < right; i++) {
      if (arr[i] < pivotValue) {
        [arr[i], arr[storeIndex]] = [arr[storeIndex], arr[i]];
        storeIndex++;
      }
      colors[i] = "red";
      colors[storeIndex] = "green";
      drawArray(arr, colors);
      await new Promise((resolve) => setTimeout(resolve, 50));
      colors[i] = "blue";
      colors[storeIndex] = "blue";
    }
    [arr[storeIndex], arr[right]] = [arr[right], arr[storeIndex]];
    drawArray(arr, colors);
    await new Promise((resolve) => setTimeout(resolve, 50));
    return storeIndex;
  }

  quickSortVisual(array);
}
