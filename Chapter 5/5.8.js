// Listing 5.8: Bezier Curve Examples

var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');


// Convenience function for averaging two values
function mid(a, b) {
  return (a + b) / 2;
}

// The three points of our quadratic Bezier
var startX = 0;
var startY = 0;
var controlX = 150;
var controlY = 220;
var endX = 200;
var endY = 0;

// Draw the quadratic curve as a red path
ctx.lineWidth = 6;
ctx.strokeStyle = "red";
ctx.fillStyle = "rgba(0,0,0,0.9)";

ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.quadraticCurveTo(controlX, controlY, endX, endY);
ctx.stroke();

// draw control point
// We subtract 3 from the x and y
// so the center of the rect is atop the relevant point
ctx.fillRect(controlX - 3, controlY - 3, 6, 6);

// Two blue lines:
// One from the start to the control point,
// and one from the end to the control point
ctx.strokeStyle = "rgba(0,0,250,0.3)";
ctx.beginPath();
ctx.moveTo(startX, startY);
ctx.lineTo(controlX, controlY);

ctx.moveTo(endX, endY);
ctx.lineTo(controlX, controlY);
ctx.stroke();

// Find the midpoints of the two lines
var ax = mid(controlX, startX);
var ay = mid(controlY, startY);
var bx = mid(controlX, endX);
var by = mid(controlY, endY);

// Draw line midpoints for visual aid
ctx.fillRect(ax - 3, ay - 3, 6, 6);
ctx.fillRect(bx - 3, by - 3, 6, 6);

// One green line connecting the blue midpoints
ctx.strokeStyle = "rgba(0,240,0,0.5)";
ctx.beginPath();
ctx.moveTo(ax, ay);
ctx.lineTo(bx, by);
ctx.stroke();

// And now we have the Bezier's midpoint!
var midX = mid(ax, bx);
var midY = mid(ay, by);

// Show the midpoint with a rect
ctx.fillRect(midX - 3, midY - 3, 6, 6);
