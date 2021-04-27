const location = document.querySelectorAll("section.time.div");

var updateTimes = function () {
  location.forEach((location) => {
    var outputContainer = location.querySelector("output");
    var now = luxon.DateTime.now();

    outputContainer.innerHTML = now.toFormat("HH:mm:ss");
  });
};

updateTimes();


setInterval(function() {
    updateTimes()
},1000);