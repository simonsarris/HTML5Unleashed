// Listing 10.4: Sample Transaction

var transaction = myDB.transaction(["myStore1, myStore2"], "readwrite");

// Do something when all the data is added to the database.
transaction.oncomplete = function(event) {
  console.log("transaction finished!");
};

transaction.onerror = function(event) {
  // Just like with opening, we should be handling errors here
};


var store1 = transaction.objectStore('myStore1');
var request1 = store1.add(
  { ID: "sei0028", rank: 4, points: 60, lastLogin: "2013-01-01" });

request1.onsuccess = function(event) {
 console.log('data successfully added to store1');
};
request1.onerror = function(event) {
  // And handling errors here too
};
