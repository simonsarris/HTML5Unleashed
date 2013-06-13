// Listing 5.29: A Function for Creating Rounded Rectangle Paths

// This function constructs a path on the
// context in the shape of a rounded rectangle.
// If this looks confusing to you, see the section on curves and arcs.
function roundedRect(ctx, x, y, width, height, radius) {
  // if the radius is larger than a side we have to reduce it
  if (width < 2 * radius) radius = width / 2;
  if (height < 2 * radius) radius = height / 2;
  ctx.beginPath();
  ctx.moveTo(x + radius, y);
  ctx.arcTo(x + width, y, x + width, y + height, radius);
  ctx.arcTo(x + width, y + height, x, y + height, radius);
  ctx.arcTo(x, y + height, x, y, radius);
  ctx.arcTo(x, y, x + width, y, radius);
  ctx.closePath();
}

var img = new Image();

img.onload = function() {
  roundedRect(ctx, 20, 20, 140, 140, 30);
  ctx.clip();
  ctx.drawImage(img, 20, 20);
}

// At the time of this writing this website serves up
// an image of a kitten in the desired /width/height
// The actual image shown is from the public domain
img.src = 'http://placekitten.com/140/140';
