// Listing 6.2: getPos2 - Faster and More Comprehensive Mouse and Touch Position

// This code is outside the getPos2 function, because
// we only want to compute it once
// This code requires a reference to the canvas element, used here as "canvas".
var stylePaddingTop = parseInt(
  getComputedStyle(canvas, null).getPropertyValue('padding-top'));
var stylePaddingLeft = parseInt(
  getComputedStyle(canvas, null).getPropertyValue('padding-left'));
var styleBorderLeft = parseInt(
  getComputedStyle(canvas, null).getPropertyValue('border-left-width'));
var styleBorderTop = parseInt(
  getComputedStyle(canvas, null).getPropertyValue('border-top-width'));

// The total padding width and height are only needed
// if your canvas is scaled by CSS:
var stylePaddingRight = parseInt(
  getComputedStyle(canvas, null).getPropertyValue('padding-right'));
var stylePaddingBottom = parseInt(
  getComputedStyle(canvas, null).getPropertyValue('padding-bottom'));
var paddingWidth = stylePaddingLeft + stylePaddingRight;
var paddingHeight = stylePaddingTop + stylePaddingBottom;

var html = document.body.parentNode;
var htmlTop = html.offsetTop;
var htmlLeft = html.offsetLeft;


function getPos2(e, canvas) {
  var element = canvas, offsetX = 0, offsetY = 0, mx, my;

  // Compute the total offset. Additional caching may be possible here
  if (element.offsetParent !== undefined) {
    do {
      offsetX += element.offsetLeft;
      offsetY += element.offsetTop;
    } while ((element = element.offsetParent));
  }

  // Add padding and border style widths to offset
  // Also add the <html> offsets in case there's a position:fixed bar
  offsetX += stylePaddingLeft + styleBorderLeft + htmlLeft;
  offsetY += stylePaddingTop + styleBorderTop + htmlTop;

  mx = e.pageX - offsetX;
  my = e.pageY - offsetY;

  // Enable this if the CSS sizing is different than the canvas width/height:
  //mx *= canvas.width / (canvas.clientWidth - paddingWidth);
  //my *= canvas.height / (canvas.clientHeight - paddingHeight);

  return {x: mx, y: my};
}
