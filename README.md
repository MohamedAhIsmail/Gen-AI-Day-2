# QuickSort Web Interface

## Project Overview

This project demonstrates the implementation of the QuickSort algorithm in JavaScript, along with a web interface that allows users to input an array of numbers, sort the array using QuickSort, and benchmark the performance of QuickSort against the built-in JavaScript sort function.

## Files

1. **index.html**: The main HTML file that contains the structure of the web page.
2. **styles.css**: The CSS file that styles the web page.
3. **script.js**: The JavaScript file that contains the QuickSort implementation, sorting functionality, and benchmarking functionality.
4. **quickSort.test.js**: The JavaScript file that contains unit tests for the QuickSort implementation using Jest.

## How GitHub Copilot Assisted in the Development Process

GitHub Copilot provided valuable assistance throughout the development process by:
1. **Generating Initial Implementations**: Copilot helped generate the initial implementations of the QuickSort algorithm, both recursive and iterative versions.
2. **Creating Unit Tests**: Copilot assisted in creating comprehensive unit tests using Jest, covering various scenarios such as empty arrays, sorted arrays, duplicates, and large datasets.
3. **Building the Web Interface**: Copilot provided suggestions for the HTML structure, CSS styling, and JavaScript functions to create a user-friendly web interface.
4. **Benchmarking**: Copilot helped implement the benchmarking functionality to compare the performance of QuickSort with the built-in JavaScript sort function.

## Performance Comparisons and Key Learnings

### Performance Comparisons

The performance tests compared the execution times of QuickSort and the built-in JavaScript sort function on the same array entered by the user. The results showed that:

- **QuickSort**: QuickSort performed well on average, but its performance can vary depending on the input array and pivot selection strategy.
- **Built-in Sort**: The built-in JavaScript sort function, which uses a hybrid of MergeSort and QuickSort, generally performed better due to its optimized implementation.

### Key Learnings

1. **Algorithm Efficiency**: While QuickSort is efficient on average, its performance can degrade to O(n^2) in the worst case. The built-in sort function is more robust and consistently performs well.
2. **Importance of Pivot Selection**: The choice of pivot in QuickSort significantly impacts its performance. Randomized pivot selection helps mitigate the risk of worst-case performance.
3. **User Experience**: Providing a web interface with clear input fields, buttons, and result displays enhances the user experience and makes the algorithm more accessible.
4. **Benchmarking**: Benchmarking is crucial for understanding the performance characteristics of different algorithms and making informed decisions about their use in various scenarios.

By leveraging GitHub Copilot, the development process was streamlined, allowing for rapid prototyping and implementation of complex features with ease.