// Listing 11.1: The First iFrame's JavaScript

// Based on an excellent example in Dev.Opera
// http://dev.opera.com/articles/view/window-postmessage-messagechannel/

window.addEventListener('DOMContentLoaded', function() {
  var mc = new MessageChannel();

  // Send a port to our parent document.
  var msg = 'First frame is ready!'
  window.parent.postMessage(msg,'http://a.example',[mc.port2]);

  // Set up our port event listener.
  mc.port1.addEventListener('message', function(event) {
    // Do something with the message we expect to receive back
    console.log(event.data);
  }, false);

  // Open the port
  mc.port1.start();
}, false);
