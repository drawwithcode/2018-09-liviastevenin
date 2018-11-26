var myMap;
var canvas;
var mappa = new Mappa('MapboxGL', 'pk.eyJ1IjoibGl2aWFzdGV2ZW5pbiIsImEiOiJjam94MzZ2NTMxbXZuM2tzNTByZ2Nka29oIn0.8iQW6BoM1_h6-7i2g7ropg');
var dista;
var bsong;
var isong;
var jsong;

var brazil = {
  lat: -13.702797,
  lng: -50.6865109,
}


var italy = {
  lat: 43.4640976,
  lng: 12.1897378,
}

var japan = {
  lat: 35.4640976,
  lng: 138.1897378,
}


var options = {
  lat: 0,
  lng: 0,
  zoom: 2,
  style: "mapbox://styles/liviastevenin/cjox5m80o83ic2roz8w7kqbsm",
  // pitch: 50
}

function toggleSong() {
  if (isong.isPlaying()) {
    isong.pause();
    bsong.play();
    options.lat = brazil.lat;
    options.lng = brazil.lng;
  } else if (bsong.isPlaying()) {
    bsong.pause();
    jsong.play();
    options.lat = japan.lat
    options.lng = japan.lng
  } else if (jsong.isPlaying()) {
    jsong.pause();
    isong.play();
    options.lat = italy.lat
    options.lng = italy.lng
  }

}



function preload() {
  // put preload code here
  //myLoc = getCurrentPosition();
  bsong = loadSound('./assets/brazil.mp3');
  isong = loadSound('./assets/italy.mp3');
  jsong = loadSound('./assets/japan.mp3');

}

function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  //console.log(myLoc);

  button = createButton('Switch location');
  button.mousePressed(toggleSong);
  isong.play();
  options.lat = italy.lat
  options.lng = italy.lng

  myMap = mappa.tileMap(options);
  myMap.overlay(canvas);

}

function draw() {
  // put drawing code here
  clear();

  var point = myMap.latLngToPixel(options.lat, options.lng);
  noStroke();
  fill('red')
  ellipse(point.x, point.y, 10);

}
