// Listing 6.4: Using requestAnimationFrame to Update at 8 Frames Per Second

// Remember: Depending on browser you may need the polyfill
// in Listing 6.3 for requestAnimationFrame to work

function update(ts) {
  requestAnimationFrame(update);
  elapsed += ts - lasttime;
  lasttime = ts;

  // Draw at 8 frames per second (draw every 125 milliseconds)
  if(elapsed > 125) {
    elapsed -= 125;  // reset the elapsed counter
    // Our canvas updating code would go here
  }
}

// Initial call:
var elapsed = 0;
var lasttime = new Date().getTime();
requestAnimationFrame(update);
