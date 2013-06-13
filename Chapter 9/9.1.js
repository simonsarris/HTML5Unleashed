// Listing 9.1: A Reference Template for the Geolocation API

// A nonfunctioning example showing the location
// of every attribute in the API

// The function called if getCurrentPosition is successful
function successCallback(position) {
  // millisecond timestamp
  position.timestamp;

  // every attribute of position.coords is a number

  // The three reliable coords attributes
  position.coords.latitude;
  position.coords.longitude;
  position.coords.accuracy;

  // The four optional coords attributes
  position.coords.altitude;
  position.coords.altitudeAccuracy;
  position.coords.speed;
  position.coords.heading;
}

// A function that fires if something goes wrong
// The single argument is a JavaScript Object containing
// an error code (code) and a reason (message)
function errorCallback(positionError) {
  positionError.code;     // 1 to 3, inclusive
  positionError.message;  // error message string
}

// identical in syntax to navigator.geolocation.getCurrentPosition
// except watchPosition returns an id, and getCurrentPosition returns nothing
var myID = navigator.geolocation.watchPosition(
  // required first argument, a success function with one arg
  successCallback,
  // optional second argument, an error function with one arg
  errorCallback,
  // optional third argument, an Object of optional attributes
  // each attribute itself is also optional,
  // here are sample nondefault values:
  { enableHighAccuracy: true,   // true might enable GPS, default false
    timeout:    6000,           // 6 seconds, default Infinity
    maximumAge: 90000           // 90 seconds, default 0
  });

// stops watchPosition from continuously checking for location changes
// and firing the successCallback
navigator.geolocation.clearWatch(myID);
