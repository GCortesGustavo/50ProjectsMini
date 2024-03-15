const screens = document.querySelectorAll('.screen');
const choose_famous_btns = document.querySelectorAll('.choose-famous-btn');
const start_btn = document.getElementById('start-btn')
const game_container = document.getElementById('game-container')
const timeEl = document.getElementById('time')
const scoreEl = document.getElementById('score')
const message = document.getElementById('message')
let seconds = 0
let score = 0
let selected_famous = {}

start_btn.addEventListener('click', () => screens[0].classList.add('up'))

choose_famous_btns.forEach(btn => {
    btn.addEventListener('click', () => {
        const img = btn.querySelector('img')
        const src = img.getAttribute('src')
        const alt = img.getAttribute('alt')
        selected_famous = { src, alt }
        screens[1].classList.add('up')
        setTimeout(createFamous, 1000)
        startGame()
    })
})

function startGame() {
    setInterval(increaseTime, 1000)
}

function increaseTime() {
    let m = Math.floor(seconds / 60)
    let s = seconds % 60
    m = m < 10 ? `0${m}` : m
    s = s < 10 ? `0${s}` : s
    timeEl.innerHTML = `Time: ${m}:${s}`
    seconds++
}

function createFamous() {
    const famous = document.createElement('div')
    famous.classList.add('famous')
    const { x, y } = getRandomLocation()
    famous.style.top = `${y}px`
    famous.style.left = `${x}px`
    famous.innerHTML = `<img src="${selected_famous.src}" alt="${selected_famous.alt}" style="transform: rotate(${Math.random() * 360}deg)" />`

    famous.addEventListener('click', catchFamous)

    game_container.appendChild(famous)
}

function getRandomLocation() {
    const width = window.innerWidth
    const height = window.innerHeight
    const x = Math.random() * (width - 200) + 100
    const y = Math.random() * (height - 200) + 100
    return { x, y }
}

function catchFamous() {
    increaseScore()
    this.classList.add('caught')
    setTimeout(() => this.remove(), 2000)
    addFamous()
}

function addFamous() {
    setTimeout(createFamous, 1000)
    setTimeout(createFamous, 1500)
}

function increaseScore() {
    score++
    if(score > 19) {
        message.classList.add('visible')
    }
    scoreEl.innerHTML = `Score: ${score}`
}