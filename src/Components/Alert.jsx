import React from "react";
import { Card } from "react-bootstrap";

function Alert({ shuffleCards, setWon }) {
  const newGame = () => {
    shuffleCards();
    setWon(false);
  };
  return (
    <>
      <Card className="alert rounded shadow p-5 d-lg-flex flex-column gap-1">
        <h1 className="fw-bold">Woned</h1>
        <img src="src\assets\pictures\won.png" className="w-50 border-0" />
        <button className="btn btn-dark " onClick={newGame}>
          New Game
        </button>
      </Card>
    </>
  );
}

export default Alert;
