// Listing 6.7: Canvas Events

// ... continued from constructor (function CanvasState)

// The following myState var is an example of a closure!
// Right here "this" means the CanvasState,
// but we are making events on the Canvas itself,
// and when the events are fired on the canvas,
// the variable "this" is going to mean the canvas!
// Because we still want to use this particular CanvasState
// in the events, we have to save a reference to it.
var myState = this;

//fixes a problem where double-clicking causes text selection on the page
canvas.addEventListener('selectstart',
  function(e) { e.preventDefault(); return false; }, false);

// For dragging we need:
// mousedown/touchstart, mousemove/touchmove, and mouseup/touchend
canvas.addEventListener('mousedown', function(e) {
  myState.doDown(e);
}, true);
canvas.addEventListener('mousemove', function(e) {
  myState.doMove(e);
}, true);
canvas.addEventListener('mouseup', function(e) {
  myState.doUp(e);
}, true);

canvas.addEventListener('touchstart', function(e) {
  if (e.targetTouches.length > 0) myState.doDown(e.targetTouches[0]);
  e.preventDefault();
}, true);
canvas.addEventListener('touchmove', function(e) {
  if (e.targetTouches.length > 0) myState.doMove(e.targetTouches[0]);
  e.preventDefault();
}, true);
canvas.addEventListener('touchend', function(e) {
  if (e.targetTouches.length > 0) myState.doUp(e.targetTouches[0]);
  e.preventDefault();
}, true);

// double-click to make new shapes
canvas.addEventListener('dblclick', function(e) {
  var mouse = myState.getPos(e);
  // Add a green 20x20 shape, centered over the mouse position:
  myState.addShape(
    new Shape(mouse.x - 10, mouse.y - 10, 20, 20, 'rgba(0,255,0,.6)'));
}, true);
