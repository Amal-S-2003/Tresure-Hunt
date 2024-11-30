import React, { useEffect, useState } from "react";
import SingleCard from "../Components/SingleCard";
import { Container } from "react-bootstrap";
import Alert from "../Components/alert";
const cardImages = [
  { src: "src\\assets\\pictures\\bottle1.jpg", matched: false },
  { src: "src\\assets\\pictures\\hang1.jpg", matched: false },
  { src: "src\\assets\\pictures\\hat1.jpg", matched: false },
  { src: "src\\assets\\pictures\\lens1.jpg", matched: false },
  { src: "src\\assets\\pictures\\ship1.jpg", matched: false },
  { src: "src\\assets\\pictures\\sward1.jpg", matched: false },
];
function Game() {
  const [cards, setCards] = useState([]);
  const [turns, setTurns] = useState(0);
  const [choiceOne, setChoiceOne] = useState(null);
  const [choiceTwo, setChoiceTwo] = useState(null);
  const [disabled, setDisabled] = useState(false);
  const [win, setWin] = useState(false);
  // Suffle Cards
  const shuffleCards = () => {
    const shuffledCards = [...cardImages, ...cardImages]
      .sort(() => Math.random() - 0.5)
      .map((card) => ({ ...card, id: Math.random() }));
    setChoiceOne(null);
    setChoiceTwo(null);
    setCards(shuffledCards);
    setTurns(0);
  };
  // Handle a Choice
  const handleChoice = (card) => {
    console.log(card);
    choiceOne ? setChoiceTwo(card) : setChoiceOne(card);
  };

  // Compare Two Selected cards
  useEffect(() => {
    if (choiceOne && choiceTwo) {
      setDisabled(true);
      if (choiceOne.src === choiceTwo.src) {
        setCards((prevCards) => {
          return prevCards.map((card) => {
            if (card.src === choiceOne.src) {
              return { ...card, matched: true };
            } else {
              return card;
            }
          });
        });
        resetTurn();
      } else {
        setTimeout(() => resetTurn(), 1000);
      }
    }

  }, [choiceOne, choiceTwo]);
  console.log(cards);

  // reset choices & increase turn
  const resetTurn = () => {
    setChoiceOne(null);
    setChoiceTwo(null);
    setTurns((prevTurns) => prevTurns + 1);
    setDisabled(false);
  };

  // Start a New game Automatically
  useEffect(() => {
    shuffleCards();
  }, []);
  return (
    <>
      <Container className="text-center px-5 py-2 d-flex flex-column align-items-center">
        <h1 className="fw-bold text-dark">Treasure Hunt</h1>
        <button
          className="btn btn-outline-dark fw-bold border-3"
          onClick={shuffleCards}
        >
          New Game
        </button>
        <div className="card-grid ">
          {cards.map((card) => (
            <SingleCard
              key={card.id}
              card={card}
              handleChoice={handleChoice}
              flipped={card === choiceOne || card === choiceTwo || card.matched}
              disabled={disabled}
            />
          ))}
        </div>
        <p className="fw-bold text-dark">Turns:{turns}</p>
      </Container>
    </>
  );
}

export default Game;
