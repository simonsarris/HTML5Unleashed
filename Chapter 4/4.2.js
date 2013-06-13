// Listing 4.2: Testing for Individual Audio Format Support

var a = document.createElement('audio');
var oggTest  = a.canPlayType('audio/ogg');
var mp3Test  = a.canPlayType('audio/mpeg');
var aacTest  = a.canPlayType('audio/aac');
var waveTest = a.canPlayType('audio/wav');
// (Possibly do a custom action if browser can or cannot play a certain type)
console.log(mp3Test); // output whether or not this browser can play MP3s
