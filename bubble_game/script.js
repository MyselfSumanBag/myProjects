const hit = document.querySelector(".hit");
const time = document.querySelector(".time");
// let score = document.querySelector(".score");
// let hero = document.querySelector(".hero");

let randomHit = 0
let timer = 60;
let score = 0;

function makeBubble(){
    for (let index = 0; index < 230; index++) {
    let hero = document.querySelector(".hero");
    let random = Math.floor(Math.random() * 10)
    hero.innerHTML += `<div class="bubble">${random}</div>`
        
    }
}

function newHit(){
    randomHit = Math.floor(Math.random() * 10);
    hit.innerText = randomHit;
    
}

function setTime(){
    document.querySelector('.time').innerText = timer;
    if(timer === 0){
        alert('Your time is over')
    }else{
        timer--;
        setTimeout(setTime,1000)
    }
}

function updateScore(){
    score += 10;
    document.querySelector('.score').innerText = score;
//    console.log(score);
}
document.querySelector('.hero').addEventListener('click',function(e){
    let targetValue = Number(e.target.innerText)
    
    if (targetValue === randomHit) {
        updateScore();
        newHit()
        makeBubble();

        
    }
})





makeBubble();
newHit()
setTime()
// updateScore()