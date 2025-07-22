# 🔵 Flip & Match: A 2-Player React Memory Game 🔴

This is a classic card-matching memory game built with React, designed for two players to compete head-to-head. The game tracks scores, indicates player turns, and declares a winner with a fun confetti celebration.

***

## ✨ Features

-   **Two-Player Gameplay:** Players (Blue and Red) take turns flipping cards.
-   **Score Tracking:** The game keeps a running score for each player.
-   **Turn Indicator:** The UI clearly shows whose turn it is.
-   **Match & Win Logic:** When a player finds a matching pair, they score a point. If not, the cards flip back.
-   **Win Celebration:** A confetti explosion celebrates the winner at the end of the game!
-   **New Game:** Easily reset the board and scores to start a new game.

***

## 🛠️ Tech Stack & Core Concepts

This project was built to practice and demonstrate fundamental and advanced React concepts.

-   **Framework:** **React.js**
-   **Build Tool:** **Vite**
-   **Key Libraries:** `react-confetti` for the win animation.
-   **Styling:** **CSS**

### Core React Concepts Demonstrated:

-   **State Management (`useState`):** Used to manage the state of the `cards` array (e.g., which cards are flipped) and the current `user` turn.
-   **Refs for Game State (`useRef`):** A key feature of this project is the use of `useRef` to manage game logic data like player points, currently selected cards (`flipArray`), and found pairs (`foundArray`). This is done intentionally to prevent unnecessary re-renders when this data changes, as it doesn't directly affect the rendered JSX until the game state requires it.
-   **Conditional Rendering:** The UI dynamically changes to show the current player's turn, the final winner, and the "New Game" button.
-   **Component Props:** Data and functions (like the `flip` handler) are passed from the main `App` component down to individual `Card` components.
-   **Handling Side Effects (`useEffect`, `setTimeout`):** `useEffect` is used to scroll to the "New Game" button, and `setTimeout` creates the delay before non-matching cards are flipped back down.

***

## 🚀 How to Run Locally

To get a local copy up and running, follow these simple steps.

1.  **Clone the repository**
    ```sh
    git clone [https://github.com/amrutkarsatyam/memory-game.git](https://github.com/amrutkarsatyam/memory-game.git)
    ```
2.  **Navigate to the project directory**
    ```sh
    cd memory-game
    ```
3.  **Install NPM packages**
    ```sh
    npm install
    ```
4.  **Run the development server**
    ```sh
    npm run dev
    ```
    The app will be available at `http://localhost:5173/` (or another port if 5173 is in use).

***

## 🔮 Future Improvements

-   **Selectable Difficulty:** Allow players to choose the number of pairs (e.g., 8, 12, or 26 pairs).
-   **Sound Effects:** Add sounds for flipping cards, finding a match, and winning the game.
-   **Enhanced Animations:** Use a library like `Framer Motion` for more fluid card flip animations.
-   **Player Name Input:** Allow players to enter their names instead of just "Blue" and "Red".
-   **High Score Tracking:** Use `localStorage` to save high scores or win/loss records.
