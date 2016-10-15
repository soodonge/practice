// var n = 9;
// var counter = 1;
// var str = '';
// while ( counter <= n) {
//   str = str + counter + ',';
//
// counter++;
// }
// console.log(str);
// while ( counter <= n) {
//   str = str + counter + ',';
//
//   if(counter === n) {
//     str = str + counter
//   }
//   counter++;
// }
// console.log(str);
// //document.getElementById("target").textContent = str
// document.getElementById("target").innerHTML = "<p>12</p><hr>  <p>34</p><hr>  <p>56</p><hr> "

var n = 10;
var counter = 1;
var str = '';

if(counter % 2 !== 0){
  while ( counter <= n ){
    str = str + counter + ',';

    if(counter === n){
      str = str + counter
    }
    counter++;
  }
}
console.log(str)
