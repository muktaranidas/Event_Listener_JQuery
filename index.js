// document.querySelector("button").addEventListener("click", function () {
//   document.querySelector("h1").innerHTML = "you have clicked the button";
// });

// $("button").click(function () {
//   $("h1").toggleClass("style1 ");
// });

//using js
// var totalButtons = document.querySelectorAll(".myButton").length;
// for (i = 0; i < totalButtons; i++) {
//   document
//     .querySelectorAll(".myButton")
//     [i].addEventListener("click", function () {
//       var text = this.innerHTML;
//       document.querySelector("h1").innerHTML = text + " is clicked";
//     });
// }

$(".myButton").click(function () {
  var value = this.innerHTML;
  $("h1").text(value + " is clicked");
});
