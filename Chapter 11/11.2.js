// Listing 11.2: The Parent Frame's JavaScript

window.addEventListener('DOMContentLoaded', function() {
  var myFrame2 = document.getElementById('myFrame2').contentWindow;

  // Listen for the message from the first iFrame
  window.addEventListener('message', function(event){
    if( event.ports.length > 0 ){
      // transfer the port to the second iFrame
      var msg = 'The port on the first frame is open!';
      myFrame2.postMessage(msg, 'http://a.example', event.ports);
    }
  },false);
} ,false);
