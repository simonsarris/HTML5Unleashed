// Listing 3.5: dragstart

var dragged = null; // A reference to the element currently being dragged

document.addEventListener("dragstart", function(event) {
  if (event.target.className !== "draggable") return;
  // Some data must be set to allow drag
  event.dataTransfer.setData("text", "");

  // store a reference to the dragged element
  dragged = event.target;
}, false);
