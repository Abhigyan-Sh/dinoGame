const dino = document.querySelector('.dino')
const cactus = document.querySelector('.cactus')
const scorePoint = document.querySelector('#scorePoint')
var HighScore = document.querySelector('#HighScore')
var points = 0
var bool= true
const reloadBtn = document.querySelector('.reloadIcon')

let HighScorePoint = localStorage.getItem('highScore_Key')
HighScore.textContent = HighScorePoint

document.addEventListener('keydown', (event) => {
    if (dino.classList != 'jump') {
        dino.classList.add('jump')
        /* 1/1 */
        // dino.style.backgroundImage = url('./img/flying_pterosaurus.png') 
        setTimeout(() => {
            dino.classList.remove('jump')
        }, 500)
    }
})

let isGameAlive = setInterval( () => {
    const dinoFootPosition = parseInt(window.getComputedStyle(dino).getPropertyValue('top'))
    // console.log(dinoFootPosition)
    const cactusLeftPosition = parseInt(window.getComputedStyle(cactus).getPropertyValue('left'))
    // console.log(cactusLeftPosition)

    if (cactusLeftPosition <= 90 && cactusLeftPosition >=0 && dinoFootPosition > 133) {
        bool = false
        cactus.classList.remove('anime')
            if (points > HighScorePoint) {
                HighScorePoint = points
                localStorage.setItem('highScore_Key', HighScorePoint)
            }
            reloadBtn.classList.add('reloadBtn')
            reloadBtn.addEventListener('click', () => {
                location.reload()
            })
    }
}, 10)

setInterval(() => {
    if (bool) {
    points = points+10
    scorePoint.textContent= points
    }
}, 1200)