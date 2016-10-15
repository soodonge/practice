// var n = 100;
// var song = '';
//
// while ( n >= 0 ) {
//   if ( n !== 0) {
//     song = song + ' ' + n + " bottles of beer on the wall! chug, chug, chug"
//   } else {
//     song += " no bottles of beer! stumble, stumble, stumble..."
//   }
//   n--
// }
//
// document.querySelector('#lyrics-one').textContent = song

var n = 100;
var song = '<ul class="lyrics">';

while ( n >= 0 ) {
  if ( n !== 0) {
    song = song + '<li>' + n + 'bottle' + ( n === 1 ? '': 's') + " of beer on the wall! chug, chug, chug</li>"
  } else {
    song += "<li> no bottles of beer! stumble, stumble, stumble...</li>"
  }
  n--
}
song += "</ul>"
document.querySelector('#lyrics-two').innerHTML = song;
