import React, { useState } from 'react';
import './App.css';

const LikeButton = () => {
  const [likes, setLikes] = useState(0);
  const [changeAmount, setChangeAmount] = useState(1);

  const updateLikes = (amount) => {
    const newLikes = likes + amount;
    setLikes(newLikes);
  };

  const resetLikes = () => {
    setLikes(0);
  };

  const getLikeMessage = () => {
    if (likes === 0) {
      return 'No likes yet';
    } else if (likes === 1) {
      return '1 like';
    } else {
      return `${likes} likes`;
    }
  };

  return (
    <div className="like-button-container">
      <div className="change-amount">
        <h2>Enter Increment and Decrement Amount</h2>
        <label></label>
        <input
          type="number"
          value={changeAmount}
          onChange={(e) => {
            const value = parseInt(e.target.value);
            setChangeAmount(isNaN(value) ? 1 : value);
          }}
        />
      </div>
      <h2>Like Counter</h2>
      <button className="like-button" onClick={() => updateLikes(changeAmount)}>
        <i className="fas fa-thumbs-up"></i> Like
      </button>
      <button className="dislike-button" onClick={() => updateLikes(-changeAmount)}>
        <i className="fas fa-thumbs-down"></i> Dislike
      </button>
      <button className="reset-button" onClick={resetLikes}>
        <i className="fas fa-undo"></i> Reset
      </button>
      <div className="inner-border">
        <p className="like-count">{getLikeMessage()}</p>
      </div>
    </div>
  );
};

export default LikeButton;






