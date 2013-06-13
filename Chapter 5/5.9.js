// Listing 5.9: drawEllipse Function for Creating Elliptical Paths

function drawEllipse(ctx, x, y, w, h) {
  // For performance reasons I prefer to keep kappa stored
  // somewhere so it is only computed once. You could also
  // use a precomputed value such as 0.551784
  var kappa = 4 * ((Math.sqrt(2) - 1) / 3),
  cx = (w / 2) * kappa,
  cy = (h / 2) * kappa,
  right = x + w,
  bottom = y + h,
  xmid = x + w / 2,
  ymid = y + h / 2;

  ctx.beginPath();
  ctx.moveTo(x, ymid);
  ctx.bezierCurveTo(x, ymid - cy, xmid - cx, y, xmid, y);
  ctx.bezierCurveTo(xmid + cx, y, right, ymid - cy, right, ymid);
  ctx.bezierCurveTo(right, ymid + cy, xmid + cx, bottom, xmid, bottom);
  ctx.bezierCurveTo(xmid - cx, bottom, x, ymid + cy, x, ymid);
  ctx.closePath();
  ctx.stroke();
}

// Sample usage:
drawEllipse(ctx, 10, 10, 200, 60)
ctx.fillStyle = 'PaleTurquoise'
ctx.strokeStyle = 'MediumVioletRed'
ctx.lineWidth = 6;
ctx.fill();
ctx.stroke();
