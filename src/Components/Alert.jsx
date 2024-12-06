import React from "react";
import { Card } from "react-bootstrap";
import won from "../assets/pictures/won.png";

function Alert({ shuffleCards, setWon }) {
  const newGame = () => {
    shuffleCards();
    setWon(false);
  };
  return (
    <>
      <Card className="alert rounded shadow p-5 d-lg-flex col-sm-8 col-lg-6 flex-column gap-1">
        <h1 className="fw-bold">Woned</h1>
        <img src={won} className="w-50 border-0" />
        <button className="btn btn-dark " onClick={newGame}>
          New Game
        </button>
      </Card>
    </>
  );
}

export default Alert;
