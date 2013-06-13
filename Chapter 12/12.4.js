// Listing 12.4: XHR Timeout

var xhr = new XMLHttpRequest();
xhr.open('GET', 'someText.txt');
xhr.timeout = 3000;

xhr.addEventListener('load', function(event) {
  // Do something with the response
});

xhr.addEventListener('timeout', function(event) {
  // Tell the user (perhaps with a soft pop-up) that the request is
  // taking a long time

  // Restart the request:
  event.target.open('GET', 'someText.txt');

  // Optionally, set a longer timeout to override the original:
  event.target.timeout = 6000;
  event.target.send();
}, false);

xhr.send();
