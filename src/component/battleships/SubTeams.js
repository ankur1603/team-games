import React from "react";
import bsContext from "./context/BSContext";
import playerContext from "../../context/PlayerContext";
import { useContext, useEffect } from "react";
import Modal from "../Modal";
import GameBoard from "./GameBoard";
import SubTeamPlayerList from "./SubTeamPlayerList";
import { toast } from "react-toastify";

export default function SubTeams(props) {
  const battleshipContext = useContext(bsContext);
  const team1Players = battleshipContext.team1Players;
  const team2Players = battleshipContext.team2Players;
  const score = battleshipContext.score;
  const opponentScore = battleshipContext.opponentScore;
  const player = useContext(playerContext);
  const playerState = player.state;
  const gameStarted = battleshipContext.gameStarted;
  let teamName = playerState.teamName;
  let role = playerState.role;

  useEffect(() => {
    const gameBoard = new window.bootstrap.Modal(
      document.getElementById("gameBoard")
    );

    const strategicBoard = new window.bootstrap.Modal(
      document.getElementById("strategicBoard")
    );
    if (gameStarted) {
      gameBoard.show();
    } else {
      strategicBoard.show();
      toast.warning("Execute fleet deployment and arm for conflict");
    }
  }, []);

  return (
    <>
      <div className="container text-center">
        <div className="row">
          <div className="col">
            <SubTeamPlayerList players={team1Players} heading="Team1 Players" />
          </div>
          <div className="col">
            <div className="mt-5 mb-5">
              <Modal
                id="gameBoard"
                title={`<span className="badge rounded-pill text-bg-primary">${(
                  playerState.subTeamName || ""
                ).toUpperCase()}</span> | Your Score: ${score} | Opponent Score: ${opponentScore}`}
                triggerButton={false}
                needRejectBtn={false}
                needAcceptBtn={role == "admin"}
                acceptLabel="Finish Game!"
                confirmFunc={props.handleFinishGame}
                body={
                  <GameBoard
                    client={props.client}
                    showAlert={props.showAlert}
                  />
                }
              />

              <Modal
                id="strategicBoard"
                title={`${(
                  playerState.subTeamName || ""
                ).toUpperCase()} Strategic Board`}
                triggerButton={false}
                needRejectBtn={false}
                triggerButtonLabel="PlaceShips"
                triggerButtonType="success"
                needAcceptBtn={role == "admin"}
                acceptLabel="Activate the war plan!"
                confirmFunc={props.handleStartGame}
                body={
                  <GameBoard
                    client={props.client}
                    showAlert={props.showAlert}
                  />
                }
              />
            </div>
            <div className="mt-5">
              <img src="versus.jpeg" />
            </div>
            {role == "admin" ? (
              <>
                <div className="mt-5">
                  <Modal
                    id="startGame"
                    title="Start Game?"
                    triggerButton={false}
                    body={`Are you sure you want to start the game with Team ${teamName} ?`}
                    confirmFunc={props.handleStartGame}
                    acceptLabel="Yes"
                    triggerButtonType="success"
                    triggerButtonLabel="Start Game"
                  />
                </div>
                <div className="mt-5">
                  <Modal
                    id="endGame"
                    title="End Game?"
                    triggerButton={false}
                    body={`Are you sure you want to end the game with Team ${teamName} ?`}
                    confirmFunc={props.handleEndGame}
                    acceptLabel="Yes"
                    triggerButtonLabel="End Game"
                  />
                </div>
              </>
            ) : (
              <></>
            )}
          </div>
          <div className="col">
            <SubTeamPlayerList players={team2Players} heading="Team2 Players" />
          </div>
        </div>
      </div>
    </>
  );
}
