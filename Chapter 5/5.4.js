// Listing 5.4: Simple Gridlines

var width = canvas.width;
var height = canvas.height;
for (var i = 0; i < width; i += 40) {
  ctx.moveTo(i - 0.5, 0);
  ctx.lineTo(i - 0.5, height);
}

for (var i = 0; i < height; i += 40) {
  ctx.moveTo(0, i - 0.5);
  ctx.lineTo(width, i - 0.5);
}
ctx.strokeStyle = 'gray';
ctx.stroke();
