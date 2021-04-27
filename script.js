const locations = document.querySelectorAll("section.time.div")

const updateTimes = function () {
  locations.forEach(location => {
    const outputContainer = location.querySelector("output")
    const timezone = location.getAttribute("data-timezone")
    const now = luxon.DateTime.now().setZone(timezone)

    outputContainer.innerHTML = now.toFormat("HH:mm:ss")
  })
}

updateTimes()


setInterval(function() {
    updateTimes()
},1000)