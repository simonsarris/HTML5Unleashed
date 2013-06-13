// Listing 10.3: Creating Object Stores in the onupgradeneeded Event

// We are upgrading the existing (but empty) database from version 0 to 1:
var myRequest = indexedDB.open('myDatabase', 1);
var myDB = null; // nothing yet, but will be an IDBDatabase object reference

// If this event fires, it fires before onsuccess
myRequest.onupgradeneeded = function(event) {
  console.log('Commencing upgrade!');

  // We could also use event.target.result
  myDB = myRequest.result; // Save a reference to our database

  // Modify the database schema

  // Using a key store:
  var store1 = myDB.createObjectStore("myStore1", { keyPath: "ID" });

  // Create additional indexes for store1:
  store1.createIndex("lastLogin", "lastLogin", { unique: false });
  store1.createIndex("rank", "rank", { unique: true });

  // Using a key generator, allowing storage of primitives (like strings):
  var store2 = myDB.createObjectStore("myStore2", { autoIncrement: true });


  // Now that we've created a schema with two stores, we can add data.

  // For store1 (key path) the key is the ID,
  // so the "ID" property of the object is necessary:
  store1.add({ ID: "wvr2098", rank: 1, points: 92, lastLogin: "2013-01-01" });
  store1.add({ ID: "sas1031", rank: 2, points: 88, lastLogin: "2013-01-05" });

  // For store2 (key generator) the keys are set automatically:
  store2.add("Some data"); // Automatically gets a key of 1
  store2.add("More data"); // Automatically gets a key of 2
};

myRequest.onsuccess = function(event) {
  // Note that this event fires after onupgradeneeded, not before.
  console.log('Database finished opening (and upgrading)!');
};
