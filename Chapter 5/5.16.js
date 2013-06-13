// Listing 5.16: Additions to Listing 5.2 for Making a Simple Drawing App

ctx.strokeStyle = 'rgba(205,0,100,.5)';
ctx.lineWidth = 5;

var path = null;
var down = false;

canvas.addEventListener('mousedown', function(e) {
  // grossly simplified mouse coordinates, don't use in production!
  // see chapter on making canvas interactive
  var x = e.clientX;
  var y = e.clientY;
  path = [];
  path.push([x,y]);
  down = true;
},  true);

canvas.addEventListener('mousemove', function(e) {
  if (!down) return;
  // grossly simplified mouse coordinates, don't use in production!
  // see chapter on making canvas interactive
  var x = e.clientX;
  var y = e.clientY;
  // add a new point to path, clear canvas, and draw complete path
  path.push([x,y]);
  drawPath();
},  true);

canvas.addEventListener('mouseup', function(e) {
  drawPath();
  down = false;
},  true);

function drawPath() {
  var l = path.length;
  ctx.beginPath();
  for (var i = 0; i < l; i++) {
  var p = path[i];
  if (i === 0) ctx.moveTo(p[0], p[1]);
  else ctx.lineTo(p[0], p[1]);
  }
  ctx.stroke();
}
