import React from "react";
import ReactDOM from "react-dom/client";
import TicTacToe from "./components/tic-tac-toe.tsx";
import "./assets/index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <TicTacToe />
  </React.StrictMode>
);
