🎮 Simon Says Game
<p align="center"> <img src="https://img.shields.io/badge/HTML5-orange?style=flat-square&logo=html5" /> <img src="https://img.shields.io/badge/CSS3-blue?style=flat-square&logo=css3" /> <img src="https://img.shields.io/badge/JavaScript-yellow?style=flat-square&logo=javascript" /> <img src="https://img.shields.io/badge/License-MIT-green?style=flat-square" /> </p>

A minimal, fast, and responsive Simon Says memory game implemented using vanilla JavaScript.
No frameworks. No dependencies. Just clean UI and efficient logic.

📌 Overview

This project recreates the classic Simon electronic memory game.
A sequence of colors is generated and the player must replicate the pattern by clicking the buttons in correct order.
Every correct round increases the level and complexity.

✨ Features

Sequential pattern generation

Event-based input handling

Visual feedback using animations

Level progression system

Instant reset on failure

Lightweight and dependency-free

🧩 Gameplay Flow

Start – Press any key to begin

Observe – A color flashes indicating the current sequence

Input – Click the buttons in the same order

Validate – Input is checked in real-time

Progress – Correct → next level, Wrong → restart

🛠️ Technologies Used
Stack	Description
HTML5	UI components and structure
CSS3	Styling, layout, animations
JavaScript (ES6)	Game logic & DOM interaction
🗂 Project Structure
root/
│
├── index.html       # Markup
├── style.css        # Style and animation
└── app.js           # Game mechanics

🚀 Getting Started
Clone the repository
git clone https://github.com/<YOUR_USERNAME>/Simon-Says-Game.git

Run the application

Just open index.html in any modern browser.

No build system.
No server.
Runs instantly.

🧠 Core Logic Summary
Game State

gameseq[] → stores generated pattern

userseq[] → stores current user input

State Machine
if (inputCorrect) {
    if (sequenceComplete) levelUp();
} else {
    gameOver();
}

Reset Conditions

Wrong color

Wrong order

Incorrect sequence length

📈 Potential Improvements

Audio feedback / sound effects

Persistent high score (localStorage)

Difficulty scaling

Mobile touch optimizations

Leaderboard

Dark / Light theme toggle

🧪 Testing

Tested on Chrome, Firefox, and Edge

Works with keyboard start and mouse click inputs

No external libraries required
