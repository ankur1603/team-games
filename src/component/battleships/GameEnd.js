import React, {useContext} from 'react'
import bsContext from "./context/BSContext";

export default function GameEnd() {
  const battleshipContext = useContext(bsContext);
  

    const yourTeamScore = battleshipContext.score;
    const opponentTeamScore = battleshipContext.opponentScore;
  
    return (
      <div className="game-end">
        <h2>Game Over!</h2>
        <p>
          <strong>Your Team Score:</strong> {yourTeamScore}
        </p>
        <p>
          <strong>Opponent Team Score:</strong> {opponentTeamScore}
        </p>
        <h3>
          {yourTeamScore > opponentTeamScore
            ? "Your Team Wins! 🎉"
            : opponentTeamScore > yourTeamScore
            ? "Opponent Team Wins! 🎉"
            : "It's a Draw! 🤝"}
        </h3>
      </div>
    );
}
