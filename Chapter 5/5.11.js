// Listing 5.11: Drawing a Complex Shape from Three Subpaths

ctx.lineWidth = 3;
ctx.fillStyle = 'rgba(0,255,0,0.5)';

ctx.beginPath();
ctx.moveTo(100, 0);
ctx.lineTo(200, 0);
ctx.lineTo(200, 200);
ctx.lineTo(0, 200);
ctx.closePath();

ctx.moveTo(20, 20);
ctx.lineTo(20, 180);
ctx.lineTo(170, 180);
ctx.lineTo(170, 20);
ctx.closePath();

ctx.moveTo(240, 100);
ctx.lineTo(240, 140);
ctx.lineTo(0, 140);
ctx.lineTo(0, 100);
ctx.closePath();

ctx.fill();
ctx.stroke();
