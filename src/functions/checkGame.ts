/* eslint-disable @typescript-eslint/no-unused-vars */
const winningGames = [
  [0, 1, 2],
  [3, 4, 5],
  [6, 7, 8],

  [0, 3, 6],
  [1, 4, 7],
  [2, 5, 8],

  [0, 4, 8],
  [2, 4, 6],
];

const checkGame = (board: Array<string>) => {
  for (const line of winningGames) {
    const [a, b, c] = line;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return { endGame: true, winner: board[a] };
    }
  }
  const maybeDraw = board.filter((element) => {
    return element !== "";
  });
  if (maybeDraw.length === 9) return { endGame: true, winner: "DRAW" };

  return { endGame: false, winner: undefined };
};
export default checkGame;
