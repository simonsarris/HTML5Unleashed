// Listing 5.28: Using Compositing to Make a Hollow Path

// Construct an in-memory canvas:
var inMemCan = document.createElement('canvas');
inMemCan.width = canvas.width;
inMemCan.height = canvas.height;
var inMemCtx = inMemCan.getContext('2d');

// Put some sample content on the primary context
ctx.fillStyle = 'orange';
ctx.fillRect(50, 50, 300, 300);
ctx.fillStyle = 'lightblue';
ctx.fillRect(80, 30, 30, 250);

// Load up the in-memory context with our path
inMemCtx.beginPath();
inMemCtx.moveTo(25, 25);
inMemCtx.quadraticCurveTo(50, 50, 80, 180);
inMemCtx.quadraticCurveTo(100, 250, 280, 180);

// Draw the thick path on our in-memory context:
inMemCtx.lineWidth = 35; // Our total line width
inMemCtx.stroke();

// The same current path is still on our context,
// we're going to reuse it!
// Change compositing and lineWidth to draw the hollowing path:
inMemCtx.globalCompositeOperation = 'destination-out'
inMemCtx.lineCap = 'square'; // I'm an important detail! Read the text!
inMemCtx.lineWidth = 20; // Our hollow line width
inMemCtx.stroke();

// Draw the in-memory canvas back to our primary canvas:
ctx.drawImage(inMemCan, 0, 0);
