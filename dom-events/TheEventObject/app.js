/* evt is an event object with various attributes and properties */
document.querySelector("button").addEventListener("click", function (evt) {
  console.log(evt);
});

/* e.key and e.code */
/* 
            1) e.key = will print 'a' if 'a' is entered
            2) e.code = will print "keyA"
*/

// const input = document.querySelector('input');
// input.addEventListener('keydown', function (e) {
//     console.log(e.key) // will print 'a' if 'a' is entered
//     console.log(e.code) // will print "keyA"
// })
// input.addEventListener('keyup', function () {
//     console.log("KEYUP")
// })

window.addEventListener("keydown", function (e) {
  switch (e.code) {
    case "ArrowUp":
      console.log("UP!");
      break;
    case "ArrowDown":
      console.log("DOWN!");
      break;
    case "ArrowLeft":
      console.log("LEFT!");
      break;
    case "ArrowRight":
      console.log("RIGHT!");
      break;
    default:
      console.log("IGNORED!");
  }
});
