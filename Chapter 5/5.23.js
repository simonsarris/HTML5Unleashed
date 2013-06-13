// Listing 5.23: A Poor Way to Fill Multiple Objects with the Same Gradient

// For example only!
// This code shows a poor method of using the same gradient for many figures
function loadGradientColors(gradient) {
  gradient.addColorStop(0, 'WhiteSmoke');
  gradient.addColorStop(0.5, 'SkyBlue');
  gradient.addColorStop(1, 'DodgerBlue');
}

// An array that describes the [x, y] location of each button
var locs = [
  [30, 30],
  [30, 70],
  [30, 110],
  [30, 150]];

ctx.font = '12px verdana bold';
for (var i = 0; i < locs.length; i++) {
  var loc = locs[i];
  var grad = ctx.createLinearGradient(loc[0], loc[1], loc[0], loc[1] + 30);
  loadGradientColors(grad);
  ctx.fillStyle = grad;
  ctx.fillRect(loc[0], loc[1], 70, 30);   // Draw the gradient
  ctx.strokeRect(loc[0], loc[1], 70, 30); // Draw a black outline
  // Draw button text
  ctx.fillStyle = 'black';
  ctx.fillText('Button ' + i, loc[0] + 6, loc[1] + 20);
}
