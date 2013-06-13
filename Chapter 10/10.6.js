// Listing 10.6: Using a Database Cursor

var transaction = myDB.transaction(['myStore1'], 'readwrite');
var store1 = transaction.objectStore('myStore1');
var cursorRequest = store1.openCursor();

cursorRequest.onsuccess = function(event) {
  var cursor = event.target.result;
  if (cursor) {
    console.log("ID " + cursor.key + " is ranked " + cursor.value.rank);
    cursor.continue();
  } else {
    console.log("Cursor complete");
  }
};
