const { quickSortRecursive, quickSortIterative } = require("./quickSort");

describe("QuickSort", () => {
  const testCases = [
    { input: [], expected: [] },
    { input: [1], expected: [1] },
    { input: [2, 1], expected: [1, 2] },
    { input: [3, 6, 8, 10, 1, 2, 1], expected: [1, 1, 2, 3, 6, 8, 10] },
    { input: [1, 2, 3, 4, 5], expected: [1, 2, 3, 4, 5] },
    { input: [5, 4, 3, 2, 1], expected: [1, 2, 3, 4, 5] },
    { input: [1, 1, 1, 1, 1], expected: [1, 1, 1, 1, 1] },
    { input: [3, -2, -1, 0, 2, 1], expected: [-2, -1, 0, 1, 2, 3] },
    {
      input: Array.from({ length: 1000 }, (_, i) => 1000 - i),
      expected: Array.from({ length: 1000 }, (_, i) => i + 1),
    },
  ];

  describe("Recursive QuickSort", () => {
    testCases.forEach(({ input, expected }) => {
      test(`sorts ${JSON.stringify(input)}`, () => {
        expect(quickSortRecursive([...input])).toEqual(expected);
      });
    });
  });

  describe("Iterative QuickSort", () => {
    testCases.forEach(({ input, expected }) => {
      test(`sorts ${JSON.stringify(input)}`, () => {
        expect(quickSortIterative([...input])).toEqual(expected);
      });
    });
  });
});
