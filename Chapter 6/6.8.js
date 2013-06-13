// Listing 6.8: doDown, doMove, and doUp

CanvasState.prototype.doDown = function(e) {
  var pos = this.getPos(e);
  var mx = pos.x;
  var my = pos.y;
  var shapes = this.shapes;
  var l = shapes.length;
  for (var i = l-1; i >= 0; i--) {
    if (shapes[i].contains(mx, my)) {
      var mySel = shapes[i];
      // Keep track of where in the object we clicked
      // so we can move it smoothly (see doMove)
      this.dragoffx = mx - mySel.x;
      this.dragoffy = my - mySel.y;
      this.dragging = true;
      this.selection = mySel;
      this.valid = false;
      return;
    }
  }
  // If we haven't returned it means we have failed to select anything.
  // If there was an object selected, we deselect it
  if (this.selection) {
    this.selection = null;
    this.valid = false; // Need to clear the old selection border
  }
}

CanvasState.prototype.doMove = function(e) {
  if (this.dragging){
    var mouse = this.getPos(e);
    // We don't want to drag the object by its top-left corner,
    // we want to drag it from where we clicked, so we use the offset
    this.selection.x = mouse.x - this.dragoffx;
    this.selection.y = mouse.y - this.dragoffy;
    this.valid = false; // Something's dragging so we must redraw
  }
}

CanvasState.prototype.doUp = function(e) {
  this.dragging = false;
}
