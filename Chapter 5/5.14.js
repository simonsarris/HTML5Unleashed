// Listing 5.14: Two Triangles, One Drawn After the Context Was Rotated

ctx.lineWidth = 8;

ctx.beginPath();
ctx.moveTo(40, 40);
ctx.lineTo(120, 40);
ctx.lineTo(80, 120);
ctx.closePath();
ctx.strokeStyle = 'Magenta';
ctx.stroke();

ctx.translate(80, 80);
ctx.rotate(Math.PI);
ctx.translate(-80, -80);

ctx.beginPath();
ctx.moveTo(40, 40);
ctx.lineTo(120, 40);
ctx.lineTo(80, 120);
ctx.closePath();
ctx.strokeStyle = 'Lightblue';
ctx.stroke();
