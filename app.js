let gameseq=[];
let userseq=[];

let btns = ["yellow", "red", "purple", "green"];

let started=false;
let level=0;            

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function() {
    if (started == false) {
        console.log("Game started");
        started = true;

        levelUp();
    }
}); 

function levelUp() {
    level++;
    h2.innerText=`Level ${level}`;

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    gameFlash(randBtn);
}

function gameFlash(btn){
    btn.classList.add("flash");
    setTimeout(function() {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn){
    btn.classList.add("userFlash");
    setTimeout(function() {
        btn.classList.remove("userFlash");
    }, 250);
}

function btnPress() {
    console.log(this);
    let btn = this;
    userFlash(btn);
}

let allBtns = document.querySelectorAll(".btn");
for (btn of allBtns) {
    btn.addEventListener("click", btnPress)
}