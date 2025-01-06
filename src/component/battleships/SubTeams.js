import React from 'react'
import bsContext from "./context/BSContext";
import playerContext from "../../context/PlayerContext";
import { useContext } from "react";
import Modal from "../Modal";
import GameBoard from "./GameBoard";

export default function SubTeams(props) {
    const battleshipContext = useContext(bsContext);  
    const team1Players = battleshipContext.team1Players;
    const team2Players = battleshipContext.team2Players;
    const score = battleshipContext.score;
    const player = useContext(playerContext);
    const playerState = player.state;
    let playerUpdate = player.update;
  
    let playerName = playerState.name;
    let teamName = playerState.teamName;
    let role = playerState.role;

  return (
    <>
    <div className="container text-center">
        <div className="row">
          <div className="col">
            <div
              className="container d-flex justify-content-evenly mt-4 text-bg-light p-3 rounded border"
              data-bs-theme="dark"
              style={{ height: "80vh" }}
            >
              <div className="componentWrapper">
                <div className="header">Team1 Players</div>
                <p className="mb-0">
                  {team1Players.map((player, index) => {
                    if(playerName === player){
                      playerUpdate("team1", "subTeamName");
                    }
                    return (
                      <h4><span
                        key={index}
                        className="badge rounded-pill text-bg-primary mx-1"
                      >
                        {player}
                      </span></h4>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
          <div className="col">
          <div className="mt-5 mb-5">
            
            <Modal id="gameBoard" title={`${(playerState.subTeamName || "").toUpperCase()} Game Board - Score: ${score}`}
            triggerButton={false}
            needRejectBtn={false}
            needAcceptBtn={role == "admin"}
            acceptLabel="Finish Game!"
            confirmFunc={props.handleFinishGame} 
            body={<GameBoard client={props.client}/>} />

            <Modal id="strategicBoard" title={`${(playerState.subTeamName || "").toUpperCase()} Strategic Board`}
            needRejectBtn={false}
            triggerButtonLabel="PlaceShips"
            triggerButtonType="success"
            acceptLabel="Ready"
            body={<GameBoard client={props.client}/>} />
          </div>
          <div className="mt-5">
            <img src="versus.jpeg"/>
          </div>
          {role == "admin" ? 
          <>
          <div className="mt-5">
          <Modal id="endGame" title="End Game?" 
                  body={`Are you sure you want to end the game with Team ${teamName} ?`} 
                  confirmFunc={props.handleEndGame} 
                  acceptLabel="Yes"
                  triggerButtonLabel="End Game"
                  />
          </div>
          <div className="mt-5">
          <Modal id="startGame" title="Start Game?" 
                  body={`Are you sure you want to start the game with Team ${teamName} ?`} 
                  confirmFunc={props.handleStartGame} 
                  acceptLabel="Yes"
                  triggerButtonType="success"
                  triggerButtonLabel="Start Game"
                  />
          </div>
          </>
          : <></>
}
          </div>
          <div className="col">
            <div
              className="container d-flex justify-content-evenly mt-4 text-bg-light p-3 rounded border"
              data-bs-theme="dark"
              style={{ height: "80vh" }}
            >
              <div className="componentWrapper">
                <div className="header">Team2 Players</div>
                <p className="mb-0">
                  {team2Players.map((player, index) => {
                    if(playerName === player){
                      playerUpdate("team2", "subTeamName");
                    }
                    return (
                      <h4><span
                        key={index}
                        className="badge rounded-pill text-bg-primary mx-1"
                      >
                        {player}
                      </span></h4>
                    );
                  })}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
