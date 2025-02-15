# Tic-tac-toe

# Tic-Tac-Toe Game

This is a simple Tic-Tac-Toe game implemented using HTML, CSS, and JavaScript. The game allows two players to take turns marking spaces in a 3x3 grid. The player who succeeds in placing three of their marks in a horizontal, vertical, or diagonal row wins the game. If all spaces are filled without a winner, the game ends in a draw.

## Features

- **Interactive Grid**: A 3x3 grid where players can click to place their marks (X or O).
- **Turn-Based Play**: Players take turns, with the first player being "X" and the second player being "O".
- **Win Detection**: The game automatically detects when a player has won or if the game ends in a draw.
- **Responsive Design**: The grid is designed to be responsive and works well on different screen sizes.

## How to Play

1. Open the `index.html` file in a web browser.
2. The game starts with Player X's turn.
3. Click on any empty cell to place your mark.
4. The game will switch turns between Player X and Player O after each move.
5. The game will announce the winner if a player gets three of their marks in a row (horizontally, vertically, or diagonally).
6. If all cells are filled and no player has won, the game will declare a draw.

## Code Structure

### HTML

- The game grid is created using a series of `div` elements arranged in three rows.
- Each cell in the grid has a unique `id` ranging from 0 to 8.
- An `onclick` event is attached to each cell, which triggers the `handleClick` function when clicked.

### CSS

- The grid is styled using Flexbox to ensure that the cells are evenly spaced and aligned.
- Each cell has a fixed width and height, with a border to visually separate them.
- The text inside each cell is centered both horizontally and vertically.

### JavaScript

- The game logic is implemented in JavaScript.
- An array `arr` is used to keep track of the state of each cell (whether it is occupied by "X", "O", or empty).
- The `handleClick` function updates the cell's content and checks for a winner or a draw after each move.
- The `checkwinner` function checks all possible winning combinations and declares the winner if a winning condition is met.

## Future Enhancements

- **Score Tracking**: Add a feature to keep track of the score across multiple games.
- **Reset Button**: Add a button to reset the game without refreshing the page.
- **AI Opponent**: Implement an AI opponent for single-player mode.
- **Animations**: Add animations for winning lines or cell clicks to enhance the user experience.

## How to Run

1. Clone the repository or download the `index.html` file.
2. Open the `index.html` file in a web browser.
3. Start playing the game!

## License

This project is open-source and available under the MIT License. Feel free to modify and distribute it as you see fit.

## Author

[Your Name]

---

Enjoy playing the game! If you have any suggestions or improvements, feel free to contribute or reach out.
