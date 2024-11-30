import React from "react";

function SingleCard({ card, handleChoice, flipped, disabled }) {
  const handleClick = () => {
    if (!disabled) {
      handleChoice(card);
    }
  };
  return (
    <>
      <div className="card bg-dark'">
        <div className={flipped ? "flipped" : " " }  >
          <img className="front" src={card.src} alt="Card Front" />
          <img
            className="back"
            src="src\assets\pictures\cardback.jpg"
            alt="Card Back"
            onClick={handleClick}
          />
        </div>
      </div>
    </>
  );
}

export default SingleCard;
