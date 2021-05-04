var Arr;
const locations = document.querySelectorAll("section.time div");

const updateTimes = function () {
  locations.forEach((location) => {
    const outputContainer = location.querySelector("output");
    const timezone = location.getAttribute("data-timezone");

    const now = luxon.DateTime.now().setZone(timezone);

    outputContainer.innerHTML = now.toFormat("HH:mm:ss");
    var timehome = now.toFormat("HH");

    if (5 <= timehome && timehome < 8) {
      //Morning
      Arr = [
        "linear-gradient(180deg, #B9DAE8 0%, #B8D3D2 50.98%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), #3B5085",
        "linear-gradient(180deg, #D0D0D0 21.88%, #989898 72.92%, #3D4950 99.98%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), #5A5A5A",
        "linear-gradient(180deg, #A3BFC8 21.88%, #9F8257 72.92%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), rgba(106, 119, 29, 0.69)",
        "linear-gradient(180deg, #85B4C8 0%, #7CB9B6 50.98%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), #3B5085",
      ];
    }
    if (8 <= timehome && timehome < 17) {
      //Day
      Arr = [
        "linear-gradient(180deg, #FFFFFF 33.33%, rgba(255, 255, 255, 0) 100%), #2D78AF",
        "linear-gradient(180deg, #D3D3D3 1.56%, #FFFFFF 14.06%, #C0C0C0 38.54%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #FFFFFF 0%, #DDDDDD 21.88%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #BDCBCD 0%, #8AB0B5 21.88%, rgba(255, 255, 255, 0) 100%), #93AAC0",
        "linear-gradient(180deg, #52A2C4 17.71%, rgba(255, 255, 255, 0.5180361) 39.06%, rgba(255, 255, 255, 0.331178) 74.48%, #D2CC93 99.99%, rgba(255, 255, 255, 0) 100%), #E8C0D1",
        "linear-gradient(180deg, #ACB9E8 1.56%, #FFFFFF 18.23%, #CDD4EF 38.54%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #0B8CEA 1.56%, rgba(255, 255, 255, 0) 100%), #97C9ED",
        "linear-gradient(180deg, #77BCEE 1.56%, rgba(255, 255, 255, 0) 100%), #CCE2F2",
      ];
    }
    if (17 <= timehome && timehome < 19) {
      //Evening
      Arr = [
        "linear-gradient(180deg, #B58D62 0%, #BAAF91 33.33%, #9E8B91 60.94%, rgba(255, 255, 255, 0) 100%), #3B5085",
        "linear-gradient(180deg, #D57373 0%, rgba(255, 255, 255, 0) 100%), #25A0C7",
        "linear-gradient(180deg, #1C345A 0%, #016CB2 45.31%, #83C4D6 60.42%, rgba(255, 255, 255, 0) 100%), #CBB18C",
        "linear-gradient(180deg, #27324A 0%, #6C68A1 23.44%, #FFFFFF 57.06%, rgba(255, 255, 255, 0) 100%), #A06A2B",
        "linear-gradient(180deg, #DE87A1 0%, #6C68A1 99.99%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #A5A5A5 0%, #8AB0B5 21.88%, rgba(255, 255, 255, 0) 100%), #A5A8AB",
      ];
    }
    if (19 <= timehome && timehome < 5) {
      //Night
      Arr = [
        "linear-gradient(180deg, #000000 0%, #121A62 47.4%, rgba(255, 255, 255, 0) 100%), #000000",
        "#000000",
        "linear-gradient(180deg, #001A5E 0%, #121A62 47.4%, rgba(255, 255, 255, 0) 100%), #000000",
      ];
    }
  });
};

updateTimes();

setInterval(function () {
  updateTimes();
}, 1000);

// variable for button, you can delete this when you have the keypress working
var button = document.getElementById("button");

// initially: display a random div on page load
var displayRandom = Math.floor(Math.random() * $(".item").length);
$(".item").hide().eq(displayRandom).show();

// this displays a random div on button click
// you will need to change this into a keypress event listener
// use an "if" statement inside of event listener
// if user presses space key, run this randomize code

//button.addEventListener("click", function() {

// displays random div
// var random = Math.floor(Math.random() * $(".item").length);
// $(".item")
//  .hide()
// .eq(random)
// .show();
//});
$(document).keyup(function (event) {
  switch (event.keyCode) {
    case 32:
      // displays random div
      var random = Math.floor(Math.random() * $(".item").length);
      $(".item").hide().eq(random).show();
      var n = Math.floor(Math.random() * Arr.length + 1) - 1;

      $(".bo").css("background", Arr[n]);
      return;
  }
});

// var now = new Date();
// var hours = now.getHours();
// var ft = now.toLocaleString("en-US", {
//     hour: "numeric",
//     minute: "numeric",
//     hour12: true
// });
