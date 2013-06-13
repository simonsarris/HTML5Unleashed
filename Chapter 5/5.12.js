// Listing 5.12: Flipping Figures Drawn to Canvas

// Normal
ctx.font = '32pt Georgia';
ctx.fillText('TIME', 50, 50);

// Flip context horizontally
ctx.fillStyle = 'blue';
ctx.save();
ctx.translate(canvas.width,0);
ctx.scale(-1, 1);
ctx.fillText('TIME', 50, 50);
ctx.restore();

// Flip context vertically
ctx.fillStyle = 'red';
ctx.save();
ctx.translate(0,canvas.height);
ctx.scale(1, -1);
ctx.fillText('TIME', 50, 50);
ctx.restore();
