// Listing 11.6: workerScript.js - The Web Worker Code


// Notify the parent immediately that the web worker is running
self.postMessage('Hello parent!');

// In the Fibonacci series, each number is a sum of the previous two
// The first two numbers in the series are 0 and 1.
// 1 2 3 4 5 6 7 8  9th numbers are:
// 0 1 1 2 3 5 8 13 21, etc.
function fib(num) {
  if (num > 2) {
    return fib(num - 2) + fib(num - 1);
  } else {
    return num-1;
  }
}

// 'self' automatically exists in web worker contexts
// and references the web worker.
self.addEventListener('message', function (event) {
  // We are expecting a message that contains an integer
  if (isNaN(event.data)) {
    self.postMessage('We need a number!');
    return;
  }

  // Otherwise, let's compute it
  var computedNumber = fib(event.data);
  self.postMessage('The Fibonacci number is: ' + computedNumber);
}, false);
