// Listing 6.1: getPos - Simple Mouse and Touch Position

// Simple coordinates from a mouse or touch event
// Does not work if there is a border, padding, or margin on the canvas
function getPos(e, canvas) {
  var bbox = canvas.getBoundingClientRect();

  return {
    x: e.clientX - bbox.left * (canvas.width / bbox.width),
    y: e.clientY - bbox.top * (canvas.height / bbox.height)
  }
}
