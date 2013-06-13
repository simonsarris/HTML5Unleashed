// Listing 5.24: A More Efficient Way to Fill Multiple Objects with the Same Gradient

// This time we create the gradient only once, at the start,
// and it is defined to start at the canvas origin
var gradient = ctx.createLinearGradient(0, 0, 0, 30);
gradient.addColorStop(0, 'WhiteSmoke');
gradient.addColorStop(0.5, 'SkyBlue');
gradient.addColorStop(1, 'DodgerBlue');

// An array that describes the [x, y] location of each button
var locs = [
  [30, 30],
  [30, 70],
  [30, 110],
  [30, 150]];

ctx.font = '12px verdana bold';
for (var i = 0; i < locs.length; i++) {
  var loc = locs[i];
  ctx.save();
  // Our gradient is defined at the origin,
  // so we can move the origin and draw everything from there!
  ctx.translate(loc[0], loc[1]);
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, 70, 30);
  ctx.strokeRect(0, 0, 70, 30);
  // Draw button text
  ctx.fillStyle = 'black';
  ctx.fillText('Button ' + i, 6, 20);
  ctx.restore();
}
