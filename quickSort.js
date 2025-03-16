// 2- Implement QuickSort Using Copilot

// function quickSort(arr) {
//   if (arr.length <= 1) {
//       return arr;
//   }

//   const pivot = arr[arr.length - 1];
//   const left = [];
//   const right = [];

//   for (const el of arr.slice(0, arr.length - 1)) {
//       if (el < pivot) {
//           left.push(el);
//       } else {
//           right.push(el);
//       }
//   }

//   return [...quickSort(left), pivot, ...quickSort(right)];
// }

// // Example usage:
// const array = [3, 6, 8, 10, 1, 2, 1];
// console.log(quickSort(array)); // Output: [1, 1, 2, 3, 6, 8, 10]

// Modify and enhance the generated implementation with explanation

function quickSort(arr, left = 0, right = arr.length - 1) {
  // Base case: If the sub-array has one or zero elements, it is already sorted
  if (left < right) {
    // Partition the array and get the pivot index
    const pivotIndex = partition(arr, left, right);
    // Recursively sort the sub-array to the left of the pivot
    quickSort(arr, left, pivotIndex - 1);
    // Recursively sort the sub-array to the right of the pivot
    quickSort(arr, pivotIndex + 1, right);
  }
  // Return the sorted array
  return arr;
}

// Common partition function
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

// Recursive QuickSort
function quickSortRecursive(arr, left = 0, right = arr.length - 1) {
  if (left < right) {
    const pivotIndex = partition(arr, left, right);
    quickSortRecursive(arr, left, pivotIndex - 1);
    quickSortRecursive(arr, pivotIndex + 1, right);
  }
  return arr;
}

// Iterative QuickSort
function quickSortIterative(arr) {
  const stack = [{ left: 0, right: arr.length - 1 }];

  while (stack.length) {
    const { left, right } = stack.pop();
    if (left < right) {
      const pivotIndex = partition(arr, left, right);
      stack.push({ left, right: pivotIndex - 1 });
      stack.push({ left: pivotIndex + 1, right });
    }
  }
  return arr;
}

// Example usage
const array = [3, 6, 8, 10, 1, 2, 1];
console.log(quickSortRecursive([...array])); // Output: [1, 1, 2, 3, 6, 8, 10]
console.log(quickSortIterative([...array])); // Output: [1, 1, 2, 3, 6, 8, 10]

module.exports = { quickSortRecursive, quickSortIterative };
