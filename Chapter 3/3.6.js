// Listing 3.6: dragenter, dragover, and drop

var dropdivs = document.getElementsByClassName('dropzone');

var l = dropdivs.length;
for (var i = 0; i < l; i++) {
  var div = dropdivs[i];
  div.addEventListener("dragenter", function(event) {
    // Requirement in some browsers, such as Internet Explorer
    event.preventDefault();
  }, false);

  div.addEventListener("dragover", function(event) {
    var t = event.target; // The object we are dragging over
    if (t.className !== "dropzone" || t.firstElementChild !== null) {
      // Disallow a drop by returning before a call to preventDefault:
      return;
    }

    // Allow a drop on everything else
    event.preventDefault();
  }, false);


  div.addEventListener("drop", function(event) {
    // prevent default action
    // (open as link for some elements in some browsers)
    event.preventDefault();
    // move dragged element to the drop target
    if (event.target.className == "dropzone") {
      dragged.parentNode.removeChild(dragged);
      event.target.appendChild(dragged);
    }
  }, false);
}
