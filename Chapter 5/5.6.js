// Listing 5.6: Making Pie

ctx.lineWidth = 4;
ctx.strokeStyle = 'magenta';

ctx.beginPath();
ctx.moveTo(50, 50);
ctx.arc(50, 50, 90, 0, 1, false);
ctx.closePath();
ctx.stroke();
