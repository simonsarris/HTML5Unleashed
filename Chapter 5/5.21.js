// Listing 5.21: A Function for Blurring Image Data Using Nearest-Neighbor Interpolation

// This listing is not meant to be run by itself,
// it is a function to be used for reference if your canvas
// app needs this kind of image blurring.

// resizing by nearest neighbor interpolation
// based on Araki Hayato's ImageFilters.js
// This kind of resizing looks more "pixely" and less
// blurry than bicubic, and generally makes
// pixel art look better when scaled up

// imgData: the image data to resize
// returns a new ImageData that is the size of resultWidth, resultHeight
function resizeNearestNeighbor(imgData, resultWidth, resultHeight) {
  var data = imgData.data;
  var data         = imgData.data,
      srcWidth     = imgData.width,
      srcHeight    = imgData.height,
      srcLength    = data.length,
      dstImageData = ctx.createImageData(resultWidth, resultHeight),
      dstPixels    = dstImageData.data;

  var xFactor = srcWidth / resultWidth,
      yFactor = srcHeight / resultHeight,
      dstIndex = 0, srcIndex,
      x, y, offset;

  for (y = 0; y < resultHeight; y += 1) {
      offset = ((y * yFactor) | 0) * srcWidth;

      for (x = 0; x < resultWidth; x += 1) {
          srcIndex = (offset + x * xFactor) << 2;

          dstPixels[dstIndex]     = data[srcIndex];
          dstPixels[dstIndex + 1] = data[srcIndex + 1];
          dstPixels[dstIndex + 2] = data[srcIndex + 2];
          dstPixels[dstIndex + 3] = data[srcIndex + 3];
          dstIndex += 4;
      }
  }
  return dstImageData;
}

// Sample usage, assumes something is on the canvas sized 250x150:
var imageData = ctx.getImageData(0, 0, 250, 150);
// 250x150 to 1000x600 = scaling four times as large:
var result = resizeNearestNeighbor(imageData, 1000, 600);
ctx.putImageData(result, 0, 0);
