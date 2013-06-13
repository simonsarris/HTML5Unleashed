// Listing 5.20: Several Examples of Bitmap Manipulation

// This listing is not meant to be run by itself, it is for reference
// What follows are several blocks of code each starting with
// getImageData and ending with putImagedata. They are intended
// to be used independently, to manipulate content that already exists
// on a canvas. For simplicity's sake they all modify the contents
// of a 250x150 canvas area, in-place.

// Since there needs to be something drawn on the canvas to manipulate,
// these code blocks by themselves don't do anything

// reduce to 8-bit color!
var imgData = ctx.getImageData(0, 0, 250, 150);
var data = imgData.data;
var length = data.length;
for (var i = 0; i < length; i += 4) {
  data[i]     = data[i] - (data[i] % 32);
  data[i + 1] = data[i + 1] - (data[i + 1] % 32);
  data[i + 2] = data[i + 2] - (data[i + 2] % 32);
  // don't change alpha!
}
ctx.putImageData(imgData, 0, 0);

// desaturate!
var imgData = ctx.getImageData(0, 0, 250, 150);
var data = imgData.data;
for (var i = 0; i < length; i += 4) {
  var average = (data[i] + data[i + 1] + data[i + 2]) / 3;
  data[i]     = average;
  data[i + 1] = average;
  data[i + 2] = average;
  // don't change alpha!
}
ctx.putImageData(imgData, 0, 0);

// tint green!
var imgData = ctx.getImageData(0, 0, 250, 150);
var data = imgData.data;
for (var i = 0; i < length; i += 4) {
  data[i]     = data[i];
  data[i + 1] = Math.min(data[i + 1]*1.9, 255);
  data[i + 2] = data[i + 2];
  // don't change alpha!
}
ctx.putImageData(imgData, 0, 0);

// every other vertical line turned blue
// Appears tinted all the same. Note that you could do this
// without image data by creating a path of lines
var imgData = ctx.getImageData(0, 0, 250, 150);
var data = imgData.data;
var flip = true;
for (var i = 0; i < length; i += 4) {
  flip = !flip;
  if (flip) continue;

  data[i]     = 0;
  data[i + 1] = 0;
  data[i + 2] = 255;
  // don't change alpha!
}
ctx.putImageData(imgData, 0, 0);

// invert!
var imgData = ctx.getImageData(0, 0, 250, 150);
var data = imgData.data;
for (var i = 0; i < length; i += 4) {
  data[i]     = 255 - data[i];
  data[i + 1] = 255 - data[i + 1];
  data[i + 2] = 255 - data[i + 2];
  // don't change alpha!
}
ctx.putImageData(imgData, 0, 0);
