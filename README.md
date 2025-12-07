🎮 SIMON SAYS GAME
<p align="center"> <img src="https://img.shields.io/badge/HTML5-orange?style=flat-square&logo=html5" /> <img src="https://img.shields.io/badge/CSS3-blue?style=flat-square&logo=css3" /> <img src="https://img.shields.io/badge/JavaScript-yellow?style=flat-square&logo=javascript" /> <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" /> </p>

A modern, lightweight, and responsive Simon Says memory game using pure JavaScript.
Clean UI, efficient code, zero external dependencies.

📌 Overview

The Simon Says Game challenges the player to remember and repeat increasingly long color sequences.

The game generates a random pattern

The player must repeat the exact order

If correct → level increases

If incorrect → game resets

This project is ideal for JavaScript beginners who want to practice:
DOM manipulation, event handling, condition checking, and simple game logic.

✨ Features

Random sequence generation

Smooth flash animations

Real-time input validation

Automatic level progression

Instant restart mechanism

Zero external libraries

🧠 Gameplay Flow

Start – Press any key to begin the game

Watch – A random button blinks

Repeat – Click the buttons in the same sequence

Check – Your input is compared with the generated sequence

Progress / Reset

Correct → next level

Wrong → game over

🛠️ Tech Stack
Technology	Purpose
HTML5	Structure & layout
CSS3	Styling, UI colors, animations
JavaScript (ES6)	Game engine & logic
🗂 Project Structure
📁 Simon-Says-Game
│
├── index.html       → UI structure
├── style.css        → Visual design & effects
└── app.js           → Game logic & interaction

🚀 Setup Instructions
✔ Clone the repository
git clone https://github.com/<YOUR_USERNAME>/Simon-Says-Game.git

✔ Open the project

Just open index.html in any modern web browser — no installation required.

No bundles, no frameworks, no compilation.
Runs instantly.

🧩 Core Logic Explained (Important)
State Variables

gameseq[] → stores generated sequence

userseq[] → stores user input sequence

Main Functions

levelUp() → generates next random color

btnPress() → registers user clicks

checkAns() → verifies correctness

resetGame() → initializes new session

Game Decision

If userseq[i] === gameseq[i] → continue

Else → GAME OVER

📈 Future Enhancements

To make this game more professional and feature-rich:

Sound effects for each color

High score system (localStorage)

Mobile gesture support

Difficulty modes

Game theme toggle

Leaderboard system

📸 Screenshots

(Add UI images when ready — recommended folder: /assets/img/)

🤝 Contributing

Contributions are always welcome.
Steps:

Fork this repository

Create a feature branch

Commit your changes

Create a pull request

📜 License

Distributed under the MIT License.
You are free to use, modify, and distribute with attribution.

⭐ Support the Project

If this repository helped you:

Star ⭐ the repo

Share it

Improve it!!!
