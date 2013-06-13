// Listing 11.4: workerScript.js - Sample Web Worker Script

// Here in the global scope of the worker script
// We might have private worker state and functions
// These are inaccessible to the page that is calling the worker.
// (unless a script tag is added to that page referencing this file)
var somePrivateVar;

function somePrivateFunction() {
  // ...
}

// 'self' automatically exists in web worker contexts
// and references the web worker.
// Using 'this' or no prefix also works,
// so long as we're careful about which scope we're in!
self.addEventListener('message', function (event) {
  // use messages received from other contexts (like the main page)
  self.postMessage('Hello parent!');
}, false);
