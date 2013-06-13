// Listing 5.26: Creating a Pattern on an In-Memory Canvas

// set up an in-memory canvas to use as a pattern
var pattern = document.createElement('canvas');
pattern.width = 40;
pattern.height = 40;
var pctx = pattern.getContext('2d');

// construct a canvas to be repeated
// We use two quadratic curves to look like a leaf
pctx.beginPath();
pctx.moveTo(2, 2);
pctx.quadraticCurveTo(40,0, 38,38);
pctx.quadraticCurveTo(0,40, 2,2);
pctx.closePath();
pctx.fillStyle = "LightGreen";
pctx.strokeStyle = "SeaGreen";
pctx.lineWidth = 2;
pctx.fill();
pctx.stroke();

// Now we can use our in-memory canvas to construct a pattern
var pattern = ctx.createPattern(pattern, "repeat");
ctx.fillStyle = pattern;
ctx.beginPath();
ctx.arc(100,100,90,0, Math.PI*2, false);
ctx.fill();
