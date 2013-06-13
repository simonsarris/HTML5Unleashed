// Listing 4.1: Testing for Individual Video Format Support

var v = document.createElement('video');
var oggTest = v.canPlayType('video/ogg; codecs="theora, vorbis"');
var h264Test = v.canPlayType('video/mp4; codecs="avc1.42E01E, mp4a.40.2"');
var webmTest = v.canPlayType('video/webm; codecs="vp8, vorbis"');
// (Possibly do a custom action if browser can or cannot play a certain type)

