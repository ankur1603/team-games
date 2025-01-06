import React, { useState, useContext } from "react";
import ShipLegend from "./ShipLegend";
import bsContext from "./context/BSContext";
import playerContext from "../../context/PlayerContext";
import GameLegend from "./GameLegend";

const GameBoard = (props) => {
  const battleshipContext = useContext(bsContext);
  const matrix = battleshipContext.matrix;
  const gameStarted = battleshipContext.gameStarted;
  const size = battleshipContext.size;
  const client = props.client;
  const [selectedShipColor, setSelectedShipColor] = useState("#007bff");

  const showAlert = props.showAlert;
  const player = useContext(playerContext);
  const playerState = player.state;

  let playerName = playerState.name;
  let teamName = playerState.teamName;
  let subTeamName = playerState.subTeamName;

  const toggleCell = (row, col, event) => {
    if (gameStarted != true) {
      const clickedCell = matrix[row][col];
      let colorToUpdate = "white";
      if (clickedCell["ours"] == "white") {
        colorToUpdate = selectedShipColor;
      }
      if (client && client.connected) {
        client.publish({
          destination: "/app/deployShip", // Destination to send the message
          body: JSON.stringify({
            type: "DEPLOY",
            playerName: playerName,
            teamName: teamName,
            subTeamName: subTeamName,
            row: row,
            column: col,
            payload: colorToUpdate,
          }),
        });
      } else {
        showAlert(
          "Oops!! Unable to connect with the backend service. Please try again in sometime!",
          "danger"
        );
      }
    }
  };

  const handleDoubleClick = (row, col, event) => {
    if (gameStarted == true) {
      if (client && client.connected) {
        client.publish({
          destination: "/app/attackShip", // Destination to send the message
          body: JSON.stringify({
            type: "ATTACK",
            playerName: playerName,
            teamName: teamName,
            subTeamName: subTeamName,
            row: row,
            column: col,
            payload: subTeamName == "team1" ? "team2" : "team1",
          }),
        });
      } else {
        showAlert(
          "Oops!! Unable to connect with the backend service. Please try again in sometime!",
          "danger"
        );
      }
    }
  };

  return (
    <>
      <div>
        {gameStarted == true ? (
          <GameLegend />
        ) : (
          <ShipLegend updateColorSelection={setSelectedShipColor} />
        )}
        <h3>Click cells to mark/unmark them</h3>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${size}, 1fr)`,
          }}
        >
          {matrix.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={(event) => toggleCell(rowIndex, colIndex, event)}
                onDoubleClick={(event) =>
                  handleDoubleClick(rowIndex, colIndex, event)
                }
                style={{
                  width: 40,
                  height: 40,
                  border: "1px solid black",
                  backgroundColor: cell["ours"],
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  cursor: "pointer",
                  margin: "1px",
                }}
              >
                {cell["hit_miss"] == "hit"
                  ? "❌"
                  : cell["hit_miss"] == "miss"
                  ? "🔘"
                  : cell["hit_miss"] == "destroyed"
                  ? "🔥"
                  : `${rowIndex}${colIndex}`}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};

export default GameBoard;
