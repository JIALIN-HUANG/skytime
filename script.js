var Arr;

// get all divs that have "item"
const locations = document.querySelectorAll(".item");

const updateTimes = function () {
  locations.forEach((location) => {
    const outputContainer = location.querySelector("output");
    const timezone = location.getAttribute("data-timezone");

    const now = luxon.DateTime.now().setZone(timezone);

    outputContainer.innerHTML = now.toFormat("hh:mm");
    var timehome = now.toFormat("HH");

    console.log(timehome);

    //Morning

    if (timehome >= 5 && timehome < 8) {
      location.style.background = "linear-gradient(180deg, #B9DAE8 0%, #B8D3D2 50.98%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), #3B5085",
       "linear-gradient(180deg, #D0D0D0 21.88%, #989898 72.92%, #3D4950 99.98%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), #5A5A5A",
       "linear-gradient(180deg, #A3BFC8 21.88%, #9F8257 72.92%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), rgba(106, 119, 29, 0.69)",
      "linear-gradient(180deg, #85B4C8 0%, #7CB9B6 50.98%, #7AA275 99.99%, rgba(255, 255, 255, 0) 100%), #3B5085";
    }

    //Day
    if (timehome >= 8 && timehome < 17) {
      location.style.background = 
        "linear-gradient(180deg, #FFFFFF 33.33%, rgba(255, 255, 255, 0) 100%), #2D78AF",
        "linear-gradient(180deg, #D3D3D3 1.56%, #FFFFFF 14.06%, #C0C0C0 38.54%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #FFFFFF 0%, #DDDDDD 21.88%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #BDCBCD 0%, #8AB0B5 21.88%, rgba(255, 255, 255, 0) 100%), #93AAC0",
        "linear-gradient(180deg, #52A2C4 17.71%, rgba(255, 255, 255, 0.5180361) 39.06%, rgba(255, 255, 255, 0.331178) 74.48%, #D2CC93 99.99%, rgba(255, 255, 255, 0) 100%), #E8C0D1",
        "linear-gradient(180deg, #ACB9E8 1.56%, #FFFFFF 18.23%, #CDD4EF 38.54%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #0B8CEA 1.56%, rgba(255, 255, 255, 0) 100%), #97C9ED",
        "linear-gradient(180deg, #77BCEE 1.56%, rgba(255, 255, 255, 0) 100%), #CCE2F2";
    }
      //Evening
    if (timehome >= 17 && timehome < 19) {
      location.style.background = 
        "linear-gradient(180deg, #B58D62 0%, #BAAF91 33.33%, #9E8B91 60.94%, rgba(255, 255, 255, 0) 100%), #3B5085",
        "linear-gradient(180deg, #D57373 0%, rgba(255, 255, 255, 0) 100%), #25A0C7",
        "linear-gradient(180deg, #1C345A 0%, #016CB2 45.31%, #83C4D6 60.42%, rgba(255, 255, 255, 0) 100%), #CBB18C",
        "linear-gradient(180deg, #27324A 0%, #6C68A1 23.44%, #FFFFFF 57.06%, rgba(255, 255, 255, 0) 100%), #A06A2B",
        "linear-gradient(180deg, #DE87A1 0%, #6C68A1 99.99%, rgba(255, 255, 255, 0) 100%), #FFFFFF",
        "linear-gradient(180deg, #A5A5A5 0%, #8AB0B5 21.88%, rgba(255, 255, 255, 0) 100%), #A5A8AB";
    }

      //Night
    if (19 <= timehome && timehome < 24) {
      location.style.background = 
        "linear-gradient(180deg, #000000 0%, #121A62 47.4%, rgba(255, 255, 255, 0) 100%), #000000",
        "#000000",
        "linear-gradient(180deg, #001A5E 0%, #121A62 47.4%, rgba(255, 255, 255, 0) 100%), #000000";
    }

    // night again
    if (timezone >= 0 && timehome < 5) {
      location.style.background =   "linear-gradient(180deg, #000000 0%, #121A62 47.4%, rgba(255, 255, 255, 0) 100%), #000000",
      "#000000",
      "linear-gradient(180deg, #001A5E 0%, #121A62 47.4%, rgba(255, 255, 255, 0) 100%), #000000";
    }
  });
};

updateTimes();

setInterval(function () {
  updateTimes();
}, 10000);

document.body.addEventListener("keyup", (event) => {
  // random number up to 4 function
  randomNumber = Math.floor(Math.random() * 5 + 1);
  // when space bar is press
  if (event.keyCode === 32) {
    if (randomNumber == 1) {
      alert("ny")
      document.querySelector(".newyork").classList.add("active");
      document.querySelector(".shanghai").classList.remove("active");
      document.querySelector(".tokyo").classList.remove("active");
      document.querySelector(".vancouver").classList.remove("active");
      updateTimes();
    }
    if (randomNumber == 2) {
      alert("shanghai")
      document.querySelector(".newyork").classList.remove("active");
      document.querySelector(".shanghai").classList.add("active");
      document.querySelector(".tokyo").classList.remove("active");
      document.querySelector(".vancouver").classList.remove("active");
      updateTimes();
    }
    if (randomNumber == 3) {
      alert("tokyo")
      document.querySelector(".newyork").classList.remove("active");
      document.querySelector(".shanghai").classList.remove("active");
      document.querySelector(".tokyo").classList.add("active");
      document.querySelector(".vancouver").classList.remove("active");
      updateTimes();
    }
    if (randomNumber == 4) {
      alert("vancouver")
      document.querySelector(".newyork").classList.remove("active");
      document.querySelector(".shanghai").classList.remove("active");
      document.querySelector(".tokyo").classList.remove("active");
      document.querySelector(".vancouver").classList.add("active");
      updateTimes();
    }
  }
});