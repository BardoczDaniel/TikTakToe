# 🎮 Tic-Tac-Toe - React Project

This is a classic Tic-Tac-Toe game developed as part of the highly acclaimed _"React - The Complete Guide"_ course created by Maximilian Schwarzmüller.

The main purpose of this repository is to put React.js fundamentals into practice by building an interactive, well-structured, and dynamic application.

## ✨ Features

- **Interactive Gameplay (2 Players):** Allows players to alternately place X and O on a 3x3 board.
- **Customizable Player Names:** Players can edit and save their custom names directly from the UI during the match.
- **Move History (Game Log):** A dynamic list displaying every single move made, updated in real-time.
- **Automatic Outcome Detection:** Instantly calculates and detects winning combinations or a draw (tie).
- **Rematch Functionality:** Allows resetting the board and the move history with a single button click, while keeping the customized player names.

## 🚀 React Concepts Practiced

This project was an excellent way to deep dive into how React manages data and the UI:

- **Components & Props:** Structuring the user interface into small, isolated, and reusable building blocks.
- **State Management (`useState`):** Handling and updating data that changes over the lifecycle of the app.
- **Lifting State Up:** Moving state to the closest common ancestor (`App.jsx`) to synchronize data between child components (Game Board, Log, and Player Panel).
- **Derived State:** Computing the active player and the winner directly from the move history (game turns), thereby avoiding redundant and bug-prone state variables.
- **Immutable State Updates:** Correctly copying arrays and objects (deep copy) to prevent unexpected rendering bugs in React.

## 🛠️ Built With

- **React.js** (initialized via Vite)
- **JavaScript (ES6+)**
- **HTML5 & CSS3**

## ⚙️ Getting Started (Local Setup)

To run this project locally, follow these steps:

1. Clone this repository:
   ```bash
   git clone [https://github.com/BardoczDaniel/TikTakToe.git](https://github.com/BardoczDaniel/TikTakToe.git)
   ```
