// Listing 10.7: Database Transaction Using an Index

var transaction = myDB.transaction(['myStore1'], 'readwrite');
var store1 = transaction.objectStore('myStore1');
var indexRequest = store1.index("lastLogin");

indexRequest.get('2013-01-01').onsuccess = function(event) {
  // There are two records with a lastLogin of 2013-01-01,
  // ID sei0028 and ID wvr2098
  // The index will always return the one with the lowest value
  console.log(event.target.result.ID); // logs sei0028
}
