// Listing 3.4: dragstart and dragover Events

// startmove is a DIV with draggable="true"
var startmove = document.getElementById('startmove');
startmove.addEventListener('dragstart', function(e) {
  e.dataTransfer.effectAllowed = 'move';
  e.dataTransfer.setData('text/plain', "hello!");
}, false);

// endmove is our destination DIV for dragging
var endmove = document.getElementById('endmove');
endmove.addEventListener('dragover', function(e) {
  e.dataTransfer.dropEffect = 'move';
  e.preventDefault(); // This is necessary!
}, false);
