// Listing 5.7: roundedRect, a Function for Producing Rounded Rectangle Paths

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

// Sample usage:
roundedRect(ctx, 20, 20, 100, 100, 10);
ctx.stroke();
