// Listing 5.5: Stroking the Same Path Multiple Times

// If you're following along in the developer console and ran prior code,
// Remember to clear the canvas with canvas.width = canvas.width
// Or a page reload

// Construct a path
ctx.moveTo(40,40);
ctx.lineTo(100, 150);
ctx.lineTo(400, 40);

// stroke several times with a smaller line width
// and different color each time
for (var i = 5; i > 0; i--) {
  ctx.lineWidth = i*16;
  var blueValue = 255 - (i*32);
  var greenValue = i*32;
  ctx.strokeStyle = 'rgb(0, ' + greenValue + ',' + blueValue + ')';
  ctx.stroke();
}
