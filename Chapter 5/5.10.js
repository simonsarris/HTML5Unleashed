// Listing 5.10: Drawing a Framed Rectangle from Two Subpaths

ctx.fillStyle = 'LightBlue';
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(100, 0);
ctx.lineTo(100, 100);
ctx.lineTo(0, 100);
ctx.closePath();

ctx.moveTo(10, 10);
ctx.lineTo(10, 90);
ctx.lineTo(90, 90);
ctx.lineTo(90, 10);
ctx.closePath();

ctx.fill();
