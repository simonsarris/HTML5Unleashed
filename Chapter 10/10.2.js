// Listing 10.2: Closing a Database, Slightly Out of Order

var myRequest = indexedDB.open('myDatabase');
var myDB = null; // nothing yet, but will be an IDBDatabase object reference

myRequest.onsuccess = function(event) {
  console.log('Database finished opening!');
  myDB = myRequest.result; // Save a reference to our database

  // We just finished opening, but we're going to close it right away:
  myDB.close();
};

// Delete the database. Note that since this code is not in
// the "myRequest.onsuccess" call, it occurs before code in that call
// This is (somewhat) bad, and initially database deletion will be blocked!
var deleteRequest = indexedDB.deleteDatabase('myDatabase');

deleteRequest.onsuccess = function(event) {
  console.log('Database deleted!');
}

deleteRequest.onblocked = function(event) {
  console.log('Delete blocked! Is a connection still open?');
}
