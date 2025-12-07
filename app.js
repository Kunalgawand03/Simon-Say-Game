let gameseq = [];
let userseq = [];

let btns = ["yellow", "red", "purple", "green"];
let started = false;
let level = 0;

let h2 = document.querySelector("h2");

document.addEventListener("keydown", function () {
    if (!started) {
        started = true;
        levelUp();
    }
});

function levelUp() {
    userseq = [];         // empty user sequence each level
    level++;
    h2.innerText = `Level ${level}`;

    // random button
    let randIdx = Math.floor(Math.random() * 4);
    let randColor = btns[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);

    gameseq.push(randColor);
    gameFlash(randBtn);
}

function checkAns(idx) {
    if (userseq[idx] === gameseq[idx]) {
        if (userseq.length === gameseq.length) {
            setTimeout(levelUp, 700);
        }
    } else {
        h2.innerHTML = `Game Over! Press any key to restart`;
        resetGame();
    }
}

function gameFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function userFlash(btn) {
    btn.classList.add("userFlash");
    setTimeout(function () {
        btn.classList.remove("userFlash");
    }, 250);
}

function btnPress() {
    let btn = this;
    let btnColor = btn.classList[1];

    userFlash(btn);
    userseq.push(btnColor);

    checkAns(userseq.length - 1);
}

let allBtns = document.querySelectorAll(".btn");
for (let btn of allBtns) {
    btn.addEventListener("click", btnPress);
}

function resetGame() {
    started = false;
    gameseq = [];
    userseq = [];
    level = 0;
}
