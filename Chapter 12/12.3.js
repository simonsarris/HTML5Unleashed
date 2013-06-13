// Listing 12.3: responseType Example

var xhr = new XMLHttpRequest();
xhr.open('GET','hello.png');
xhr.responseType = 'blob';

xhr.addEventListener('load', function() {
  console.log(this.response);
  var blob = new Blob([this.response], {type: 'image/png'});

  var r = new FileReader();
  r.onload = function(e) {
    var img = new Image();
    img.src = r.result;
    document.body.appendChild(img);
  }
  r.readAsDataURL(blob);

}, false);

xhr.send();
