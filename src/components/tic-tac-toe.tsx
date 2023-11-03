/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, useState } from "react";
import BoardItem from "./BoardItem";
import checkGame from "../functions/checkGame";
import { useTranslation } from "react-i18next";

const TicTacToe = () => {
  const { t: lang } = useTranslation();

  const TURN = {
    X: lang("iconX"),
    O: lang("iconO"),
  };
  const [board, setBoard] = useState(new Array(9).fill(""));
  const [turn, setTurn] = useState(TURN.X);
  const [winner, setWinner] = useState<string | undefined>();

  useEffect(() => {
    const result = checkGame(board);
    if (result.endGame) setWinner(result.winner);
  }, [board]);

  const changeTurn = () => {
    setTurn(turn === TURN.X ? TURN.O : TURN.X);
  };

  const updateBoard = (index: number, element: string) => {
    const newBoard = [...board];
    if (newBoard[index]) return;

    newBoard.splice(index, 1, element);
    setBoard(newBoard);
    changeTurn();
  };

  const handleChange = (index: number) => {
    if (winner !== undefined) return;
    updateBoard(index, turn);
  };
  const resetGame = () => {
    setBoard(new Array(9).fill(""));
    setTurn(TURN.X);
    setWinner(undefined);
  };

  return (
    <>
      <h1>{lang("tittleApp")}</h1>

      {winner !== undefined && (
        <article>
          <h2> {lang("endGame")} </h2>
          {winner === "DRAW" ? (
            <h3>{lang("thereIsDraw")}</h3>
          ) : (
            <h3>
              {lang("theWinnerIs")}
              {winner}
            </h3>
          )}
        </article>
      )}
      <article className="boardArticle">
        <div className="board">
          {board.map((element, index) => (
            <BoardItem
              element={element}
              index={index}
              key={index}
              functionOnClick={() => handleChange(index)}
            />
          ))}
        </div>
      </article>
      <h3>{lang("turn", { turn: turn })} </h3>
      {winner !== undefined && (
        <button className="resetGame" onClick={resetGame}>
          {lang("resetGame")}
        </button>
      )}
    </>
  );
};

export default TicTacToe;
