// Listing 6.6: Shape Constructor and Prototype Methods

// Constructor for Shape, an object to hold all data for drawn rectangles
function Shape(x, y, w, h, fill) {
  // All we're doing is checking if the values exist.
  // "x || 0" is a simple way of saying:
  // "if there is a value for x, use that. Otherwise (it's undefined), use 0."
  this.x = x || 0;
  this.y = y || 0;
  this.w = w || 10;
  this.h = h || 10;
  this.fill = fill || '#AAAAAA';
}

// Draws this shape to a given context
Shape.prototype.draw = function(ctx) {
  ctx.fillStyle = this.fill;
  ctx.fillRect(this.x, this.y, this.w, this.h);
}

// Determine if a point is inside the shape's bounds
Shape.prototype.contains = function(mx, my) {
  // All we have to do is make sure the Mouse X,Y fall in the area between
  // the shape's X and (X + Height) and its Y and (Y + Height)
  return  (this.x <= mx) && (this.x + this.w >= mx) &&
          (this.y <= my) && (this.y + this.h >= my);
}
