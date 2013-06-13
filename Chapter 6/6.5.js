// Listing 6.5: Animating Three Squares at Different Speeds Based on Elapsed Time

// Remember: Depending on browser you may need the polyfill
// in Listing 6.3 for requestAnimationFrame to work

// Keep track of the x location of three squares:
var mx1 = 0;
var mx2 = 0;
var mx3 = 0;

var time;
function draw(now) {
  requestAnimationFrame(draw);
  var elapsed = now - (time || now);
  time = now;

  // move the squares by some (very small) number of pixels per millisecond
  mx1 += 0.2 * elapsed;
  mx2 += 0.1 * elapsed;
  mx3 += 0.05 * elapsed;

  // Drawing the squares:
  ctx.clearRect(0,0,300,300);
  ctx.fillStyle = 'red';
  ctx.fillRect(mx1, 40, 20, 20);
  ctx.fillStyle = 'green';
  ctx.fillRect(mx2, 80, 20, 20);
  ctx.fillStyle = 'blue';
  ctx.fillRect(mx3, 120, 20, 20);

  // Reset the squares' positions to zero when they go offscreen
  if (mx1 > 300) mx1 = 0;
  if (mx2 > 300) mx2 = 0;
  if (mx3 > 300) mx3 = 0;
}

// Initial call:
requestAnimationFrame(draw);
