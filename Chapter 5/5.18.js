// Listing 5.18: Image Data

ctx.fillStyle = 'red';
ctx.fillRect(0, 0, 1, 1);
ctx.fillStyle = 'rgba(0, 0, 255, 0.4)';
ctx.fillRect(0, 1, 1, 1);
ctx.fillStyle = 'lime';
ctx.fillRect(1, 1, 1, 1);
console.log(ctx.getImageData(0, 0, 2, 2));
