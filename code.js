const startButton = document.getElementById("start-button")
const chooseButtons = document.querySelectorAll(".choose-button")
const time = document.getElementById("time")
const score = document.getElementById("score")
const message = document.getElementById("message")
const html = document.querySelector("html")
const info = document.querySelector(".info")
const spawnZone = document.querySelector(".spawn-zone")
let point = 0

const images = [
  "./assets/fly.png",
  "./assets/mosquito.webp",
  "./assets/spider.png",
  "./assets/roach.png"
]

let selectedImg

startButton.addEventListener("click", () => {
  html.scrollTo({
    top: window.innerHeight,
    left: 0,
    behavior: "smooth",
  })
})

for (let index = 0; index < chooseButtons.length; index++) {
  chooseButtons[index].addEventListener("click", ()=>{
    selectedImg = images[index]

    html.scrollTo({
      top: window.innerHeight * 2,
      left: 0,
      behavior: "smooth",
    })

    let minutes = '00'
    let seconds = 0
    setInterval(() => {
      // minutes: 0
      seconds++

      if (seconds == 60){
        minutes++
        seconds = 0
      }

      if (minutes < 10 && String(minutes).charAt(0) !== '0'){
        minutes = `0${minutes}`
      }
      if (seconds < 10){
        seconds = `0${seconds}`
      }
      time.textContent = `Time: ${minutes}:${seconds}`
    }, 1000);

    setInterval(() => {
      generateBichardos()
    }, 3000);
  })
}

function generateBichardos() {
  const gameHeight = window.innerHeight - info.offsetHeight - 100
  const gameWidth = window.innerWidth - 100

  const y = Math.floor(Math.random() * gameHeight)
  const x = Math.floor(Math.random() * gameWidth)

  const image = document.createElement("img")
  image.src = selectedImg
  image.style.top = `${y}px`
  image.style.left = `${x}px`
  image.addEventListener("click", ()=>{
    image.remove()
    point++
    score.textContent = `Score: ${point}`
    if (point == 5){
      message.style.opacity = 1
    }
  })

  spawnZone.appendChild(image)
}

window.addEventListener("load", ()=>{
  html.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  })
})