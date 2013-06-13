// Listing 10.1: Opening a Database

var myRequest = indexedDB.open('myDatabase');
var myDB = null; // nothing yet, but will be an IDBDatabase object reference

// In both success and error events, event.target === myRequest
myRequest.onsuccess = function(event) {
  console.log('Success!');
  myDB = myRequest.result; // Save a reference to our database
};

myRequest.onerror = function(event) {
  console.log('Oh no!');
};
