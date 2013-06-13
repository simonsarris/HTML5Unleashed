// Listing 5.27: Using Compositing to Fill the Opaque Portions of an Image

// Draw our initial image.
// myHTML5Logo is a reference to an Image element
// The logo is from http://www.w3.org/html/logo/
// such as:
// http://www.w3.org/html/logo/downloads/HTML5_Logo_256.png
ctx.drawImage(myHTML5Logo, 0, 0);

// Gradient setup:
var grad = ctx.createLinearGradient(0, 0, 0, 256);
grad.addColorStop(0, 'Black');
grad.addColorStop(0.2, '#E34C26'); // Dark Orange
grad.addColorStop(0.6, '#F06529'); // Light Orange
grad.addColorStop(1, 'Black');
ctx.fillStyle = grad;

// Cover the image with our gradient
ctx.globalCompositeOperation = 'source-in';
ctx.fillRect(0,0,500,500);

// Don't forget to set it back to default!
ctx.globalCompositeOperation = 'source-over';
