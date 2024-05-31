import React from 'react'
import './Popup.css'
const Popup = ({status,word ,reset}) => {
    if (!status) {
        return
    }
  return (
    <div className="popup-container">
      <div className="popup">
        <h2>{status === "Won" ? "Congratulations!" : "Game Over"}</h2>
        <p>{status === "Won" ? "You won!" : "You lost!"}</p>
        <p>The word was: {word}</p>
        <button onClick={reset}>Play Again</button>
      </div>
    </div>
  )
}

export default Popup;
