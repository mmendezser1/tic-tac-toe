// sum.test.js
import { expect, test } from "vitest";
import checkGame from "../functions/checkGame";

test("NO ONE WINS", () => {
  const resultGame = checkGame(["X", "O", "X", "O", "O", "X", "O", "X", "O"]);
  expect(resultGame.endGame).toBe(false);
});

test("WINS X IN LINE", () => {
  const resultGame = checkGame(["X", "X", "X", "O", "X", "O", "O", "X", "O"]);
  expect(resultGame.endGame).toBe(true);
  expect(resultGame.winner).toBe("X");
});
test("WINS O IN LINE", () => {
  const resultGame = checkGame(["X", "O", "O", "X", "X", "O", "O", "X", "O"]);
  expect(resultGame.endGame).toBe(true);
  expect(resultGame.winner).toBe("O");
});

test("WINS X IN DIAGONAL", () => {
  const resultGame = checkGame(["X", "O", "O", "X", "X", "X", "O", "O", "X"]);
  expect(resultGame.endGame).toBe(true);
  expect(resultGame.winner).toBe("X");
});
