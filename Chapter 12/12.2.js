// Listing 12.2: XHR Progress Event

var xhr = new XMLHttpRequest();
xhr.open('GET','hello.png');

xhr.addEventListener('progress', function(event) {
  if (event.lengthComputable) {
    var percentComplete = event.loaded / event.total;
    // Display the percent complete
  } else {
    // Unable to compute progress information since the total size is unknown
  }
}, false);

xhr.send();
