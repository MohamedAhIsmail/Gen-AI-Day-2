# Comparison of Sorting Algorithms

## QuickSort
**Time Complexity**:
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n^2) (when the pivot selection is poor, e.g., always choosing the smallest or largest element)

**Space Complexity**: O(log n) (due to recursion stack)

**Stability**: Not stable (relative order of equal elements may not be preserved)

**In-Place**: Yes (does not require additional memory for sorting)

**Characteristics**: QuickSort is generally faster in practice compared to other O(n log n) algorithms due to its cache efficiency and low overhead. However, it can degrade to O(n^2) if not implemented with a good pivot selection strategy.

## MergeSort
**Time Complexity**:
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

**Space Complexity**: O(n) (requires additional memory for merging)

**Stability**: Stable (relative order of equal elements is preserved)

**In-Place**: No (requires additional memory for merging)

**Characteristics**: MergeSort guarantees O(n log n) time complexity in all cases and is stable. It is well-suited for sorting linked lists and external sorting (sorting data that doesn't fit into memory).

## HeapSort
**Time Complexity**:
- Best: O(n log n)
- Average: O(n log n)
- Worst: O(n log n)

**Space Complexity**: O(1) (in-place sorting)

**Stability**: Not stable (relative order of equal elements may not be preserved)

**In-Place**: Yes (does not require additional memory for sorting)

**Characteristics**: HeapSort guarantees O(n log n) time complexity in all cases and is in-place. However, it is generally slower in practice compared to QuickSort due to less efficient memory access patterns.

## BubbleSort
**Time Complexity**:
- Best: O(n) (when the array is already sorted)
- Average: O(n^2)
- Worst: O(n^2)

**Space Complexity**: O(1) (in-place sorting)

**Stability**: Stable (relative order of equal elements is preserved)

**In-Place**: Yes (does not require additional memory for sorting)

**Characteristics**: BubbleSort is simple to implement but inefficient for large datasets. It is mainly used for educational purposes and small datasets.

## InsertionSort
**Time Complexity**:
- Best: O(n) (when the array is already sorted)
- Average: O(n^2)
- Worst: O(n^2)

**Space Complexity**: O(1) (in-place sorting)

**Stability**: Stable (relative order of equal elements is preserved)

**In-Place**: Yes (does not require additional memory for sorting)

**Characteristics**: InsertionSort is efficient for small datasets and nearly sorted arrays. It is often used as a subroutine in more complex sorting algorithms (e.g., QuickSort and MergeSort) for small subarrays.

## SelectionSort
**Time Complexity**:
- Best: O(n^2)
- Average: O(n^2)
- Worst: O(n^2)

**Space Complexity**: O(1) (in-place sorting)

**Stability**: Not stable (relative order of equal elements may not be preserved)

**In-Place**: Yes (does not require additional memory for sorting)

**Characteristics**: SelectionSort is simple but inefficient with O(n^2) time complexity in all cases. It is in-place but not stable.

## Summary
- **QuickSort**: Fast in practice, in-place, but not stable and can degrade to O(n^2) in the worst case.
- **MergeSort**: Guarantees O(n log n) time complexity, stable, but not in-place.
- **HeapSort**: Guarantees O(n log n) time complexity, in-place, but not stable and generally slower than QuickSort.
- **BubbleSort**: Simple but inefficient for large datasets, mainly used for educational purposes.
- **InsertionSort**: Efficient for small or nearly sorted datasets, stable, and in-place.
- **SelectionSort**: Simple but inefficient with O(n^2) time complexity in all cases, in-place but not stable.