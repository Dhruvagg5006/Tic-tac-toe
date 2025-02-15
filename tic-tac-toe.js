let currentPlayer = "X";
        let arr = Array(9).fill(null);

        function checkWinner() {
            const winningCombinations = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
                [0, 4, 8], [2, 4, 6]              // Diagonals
            ];

            for (let combo of winningCombinations) {
                const [a, b, c] = combo;
                if (arr[a] !== null && arr[a] === arr[b] && arr[b] === arr[c]) {
                    document.write(`Winner is ${currentPlayer}`);
                    return;
                }
            }

            if (!arr.some((e) => e === null)) {
                document.write(`Draw!!`);
                return;
            }
        }

        function handleClick(el) {
            const id = Number(el.id);
            if (arr[id] !== null) return;

            arr[id] = currentPlayer;
            el.innerText = currentPlayer;
            el.classList.add(currentPlayer, 'pop'); // Add class for color and animation

            checkWinner();
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
