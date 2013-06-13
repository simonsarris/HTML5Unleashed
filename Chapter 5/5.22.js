// Listing 5.22: Examples of Radial Gradients

// Create a centered gradient and fill a rectangle
var radgrad = ctx.createRadialGradient(60, 60, 10,
                                       60, 60, 50);
radgrad.addColorStop(0, 'rgba(255,0,0,1)');
radgrad.addColorStop(0.8, 'rgba(228,255,0,.9)');
radgrad.addColorStop(1, 'rgba(228,255,0,0)');

ctx.fillStyle = radgrad;
ctx.fillRect(0, 0, 500, 500);

ctx.translate(100, 0);

// Create a radial gradient and fill a triangular path with it
var radgrad = ctx.createRadialGradient(65, 65, 10,
                                       50, 50, 50);
radgrad.addColorStop(0, 'Magenta');
radgrad.addColorStop(0.6, 'Blue');
radgrad.addColorStop(0.8, 'Blue');
radgrad.addColorStop(1, 'rgba(0,0,255,0)');

ctx.fillStyle = radgrad;
ctx.strokeStyle = 'rgba(0,0,0,.3)' // Triangle border
ctx.beginPath();
ctx.moveTo(50,0)
ctx.lineTo(100,100)
ctx.lineTo(0,100)
ctx.closePath();
ctx.fill();
ctx.stroke();

ctx.translate(100, 0);

// Create a radial gradient with an offset center and fill a rectangle
var radgrad = ctx.createRadialGradient(25, 45, 10,
                                       50, 50, 50);
radgrad.addColorStop(0, 'PaleGoldenrod');
radgrad.addColorStop(0.4, 'Olive');
radgrad.addColorStop(0.7, 'Sienna');
radgrad.addColorStop(1, 'rgba(140,0,0,0)');
ctx.fillStyle = radgrad;
ctx.fillRect(0, 0, 500, 500);
