import React from "react";

export default function AboutBattleShips(props) {
  return (
    <>
      <div className="card text-center mt-2 mb-2 container">
        <div className="text-body-secondary">
          <div className="row">
            <div className="col-12">
              <div className="componentWrapper">
                <div className="header">{props.teamName} Players</div>
                <p className="mb-0">
                  {props.players.map((player, index) => (
                    <span
                      key={index}
                      className="badge rounded-pill text-bg-primary mx-1"
                    >
                      {player}
                    </span>
                  ))}
                </p>
              </div>
            </div>
          </div>
          {props.role === "admin" && (
            <div className="row mt-3">
              <div className="col-12">
                <button
                  type="button"
                  className="btn btn-success w-100"
                  onClick={props.handleSplitTeam}
                >
                  Split Team
                </button>
              </div>
            </div>
          )}
        </div>
        <div className="card-body row">
          {/* Left Section: Image */}
          <div className="col-12 col-md-6">
            <img
              src="BattleShips1.jpeg"
              alt="BattleShips"
              className="img-fluid border border-success rounded"
              style={{ maxHeight: "60vh", objectFit: "cover" }}
            />
          </div>
          {/* Right Section: Game Info */}
          <div className="text-start col-12 col-md-6">
            <p className="card-text">
              <p>
                <strong>⛴ Battleships ⛴</strong> is a classic strategy game played
                between two teams. The objective is to sink all the opponent’s ships
                before they sink yours. The game involves a combination of planning,
                guessing, and a bit of luck.
              </p>
              <h2 className="text-secondary mt-4">Gameplay:</h2>
              <ol>
                <li>
                  <strong>Setup:</strong>
                  <ul>
                    <li>
                      Each team has a grid, typically 10x10, where they secretly
                      place their ships.
                    </li>
                    <li>
                      Ships vary in size and include types like aircraft carriers,
                      battleships, submarines, destroyers, and patrol boats.
                    </li>
                    <li>
                      Ships are placed either horizontally or vertically on the grid,
                      ensuring they don’t overlap.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Turns:</strong>
                  <ul>
                    <li>
                      Teams take turns “firing” at specific coordinates by clicking
                      on the grid and pressing the fire button.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Tracking Progress:</strong>
                  <ul>
                    <li>
                      Teams keep track of hits and misses on a separate “target grid”
                      to strategize their next move.
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Sinking Ships:</strong>
                  <ul>
                    <li>
                      When all parts of a ship are hit, it is considered sunk. The
                      opponent announces, “You sunk my [ship type]!”
                    </li>
                  </ul>
                </li>
                <li>
                  <strong>Winning:</strong>
                  <ul>
                    <li>
                      The first team to sink all of their opponent’s ships wins the
                      game.
                    </li>
                  </ul>
                </li>
              </ol>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}