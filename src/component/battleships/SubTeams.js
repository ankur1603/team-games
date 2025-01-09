import React from 'react'
import bsContext from "./context/BSContext";
import playerContext from "../../context/PlayerContext";
import { useContext } from "react";
import Modal from "../Modal";
import GameBoard from "./GameBoard";
import SubTeamPlayerList from './SubTeamPlayerList';

export default function SubTeams(props) {
    const battleshipContext = useContext(bsContext);  
    const team1Players = battleshipContext.team1Players;
    const team2Players = battleshipContext.team2Players;
    const turn = battleshipContext.turn;
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
            <SubTeamPlayerList players={team1Players} heading="Team1 Players"/>
          </div>
          <div className="col">
          <div className="mt-5 mb-5">
            
            <Modal id="gameBoard" title={`${(playerState.subTeamName || "").toUpperCase()} Game Board - Score: ${score} - Turn: ${(turn || "").toUpperCase()}`}
            triggerButton={false}
            needRejectBtn={false}
            needAcceptBtn={role == "admin"}
            acceptLabel="Finish Game!"
            confirmFunc={props.handleFinishGame} 
            body={<GameBoard client={props.client} showAlert={props.showAlert}/>} />

            <Modal id="strategicBoard" title={`${(playerState.subTeamName || "").toUpperCase()} Strategic Board`}
            needRejectBtn={false}
            triggerButtonLabel="PlaceShips"
            triggerButtonType="success"
            acceptLabel="Ready"
            body={<GameBoard client={props.client} showAlert={props.showAlert}/>} />
          </div>
          <div className="mt-5">
            <img src="versus.jpeg"/>
          </div>
          {role == "admin" ? 
          <>
          <div className="mt-5">
          <Modal id="startGame" title="Start Game?" 
                  body={`Are you sure you want to start the game with Team ${teamName} ?`} 
                  confirmFunc={props.handleStartGame} 
                  acceptLabel="Yes"
                  triggerButtonType="success"
                  triggerButtonLabel="Start Game"
                  />
          </div>
          <div className="mt-5">
          <Modal id="endGame" title="End Game?" 
                  body={`Are you sure you want to end the game with Team ${teamName} ?`} 
                  confirmFunc={props.handleEndGame} 
                  acceptLabel="Yes"
                  triggerButtonLabel="End Game"
                  />
          </div>
          </>
          : <></>
}
          </div>
          <div className="col">
          <SubTeamPlayerList players={team2Players} heading="Team2 Players"/>
          </div>
        </div>
      </div>
    </>
  )
}
