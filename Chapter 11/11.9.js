// Listing 11.9: shared.js - The Shared Worker JavaScript

// The same Fibonacci function as the dedicated workers example
function fib(num) {
  if (num > 2) {
    return fib(num - 2) + fib(num - 1);
  } else {
    return num-1;
  }
}

var connections = 0;

self.addEventListener('connect', function (event) {
    var port = event.ports[0];

    connections++;
    port.postMessage('New connection. Total connections: ' + connections);

    port.addEventListener('message', function (event) {
      var data = event.data;
      var computed = fib(data.fib);
      port.postMessage('Hello ' + data.page);
      port.postMessage('The number you requested is: ' + computed);
    }, false);

    port.start();
}, false);
