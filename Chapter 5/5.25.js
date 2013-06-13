// Listing 5.25: Using a Pattern to Fill Text with an Image

var img = new Image();

img.onload = function() {
  ctx.fillStyle = ctx.createPattern(img, "no-repeat");
  // We cover text in a later section,
  // so don't worry if these commmands look unfamiliar
  ctx.font = 'bold 60pt georgia';
  ctx.fillText('Large', 0, 72);
  ctx.fillText('Magellanic', 0, 72 * 2);
  ctx.fillText('Cloud', 0, 72 * 3);
}

// An image from the "Star" article on Wikipedia
// of the Large Magellanic Cloud
// (you'll have to supply your own image)
// The big font used assumes your image is very large,
// otherwise you might not see all the text!
img.src = 'Starsinthesky.jpg';
