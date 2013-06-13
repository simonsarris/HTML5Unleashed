// Listing 11.3: The Second iFrame's JavaScript

window.addEventListener('message', function(event) {
  // Now that we've received the message that came from the first iFrame
  // We can send messages back

  // The parent frame has no knowledge of this message
  var msg = 'Hello first iFrame, This is the second iFrame!';
  event.ports[0].postMessage(msg);
} ,false);
