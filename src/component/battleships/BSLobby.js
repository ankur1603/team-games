import React from "react";
import { useContext, useEffect, useState } from "react";
import playerContext from "../../context/PlayerContext";
import { SockJSClient } from "../SockJSClient";
import { useNavigate } from 'react-router-dom';
import bsContext from "./context/BSContext";
import AboutBattleShips from "./AboutBattleShips";
import SubTeams from "./SubTeams";
import GameEnd from "./GameEnd";
import Modal from "../Modal";

function BSLobby() {
  const [client,setClient] = useState(null);

  const battleshipContext = useContext(bsContext);  
  const teamPlayers = battleshipContext.teamPlayers;
  const updateTeamPlayers = battleshipContext.updateTeamPlayers;
  const updateTeam1Players = battleshipContext.updateTeam1Players;
  const updateTeam2Players = battleshipContext.updateTeam2Players;
  const teamSplitDone = battleshipContext.teamSplitDone;
  const updateTeamSplitDone = battleshipContext.updateTeamSplitDone;
  const updateGameStarted = battleshipContext.updateGameStarted;
  const refreshMatrix = battleshipContext.refreshMatrix;
  const resetAll = battleshipContext.resetAll;
  const updateScore = battleshipContext.updateScore;
  const updateOpponentScore = battleshipContext.updateOpponentScore;
  const player = useContext(playerContext);
  const playerState = player.state;
  let playerUpdate = player.update;

  let playerName = playerState.name;
  let teamName = playerState.teamName;
  let role = playerState.role;
  let playerSubTeam = playerState.subTeamName;

  let navigate = useNavigate();
  const TOPIC = "/topic/" + teamName; // Replace with your topic
  useEffect(() => {
    const client = SockJSClient(playerState);
    setClient(client)
    client.onConnect = () => {
      client.subscribe(TOPIC, (message) => {
        console.log("Received message:", message.body);
        const jsonObj = JSON.parse(message.body);
        const type = jsonObj.type;
        const payload = jsonObj.payload;
          if(type == 'ADMIN'){
            if(playerName == payload){
              playerUpdate('admin', 'role')
            }
          }else if(type == 'PLAYERS') {
            updateTeamPlayers(payload);
          }else if(type == 'TEAM_SPLIT_DONE'){
            updateTeamSplitDone(true);
          }else if(type == 'END_GAME'){
            const gameBoard = new window.bootstrap.Modal(document.getElementById("gameBoard"));
            gameBoard.hide();
            const gameResult = new window.bootstrap.Modal(document.getElementById("gameResult"));
            gameResult.show();
          }else if(type == 'START_GAME'){
            const strategicBoard = new window.bootstrap.Modal(document.getElementById("strategicBoard"));
            strategicBoard.hide();
            updateGameStarted(true);
            const gameBoard = new window.bootstrap.Modal(document.getElementById("gameBoard"));
            gameBoard.show();
          }

      });
      client.subscribe(TOPIC+"/team1", (message) => {

          console.log("Received message1:", message.body);
          const jsonObj = JSON.parse(message.body);
          const type = jsonObj.type;
          const payload = jsonObj.payload;
          if(type=='PLAYERS'){
            updateTeam1Players(payload);
          } 
          if(playerSubTeam == 'team1')
          {         
            if (type == 'DEPLOY'){
              const row = jsonObj.row;
              const column = jsonObj.column;
              refreshMatrix(row, column, 'ours', payload);
            }else if (type == 'MARK_SELF') {
              const row = jsonObj.row;
              const column = jsonObj.column;
              const score = jsonObj.score;
              updateScore(score);
              refreshMatrix(row, column, 'hit_miss', payload);  
            }else if (type == 'MARK_OPPONENT') {
              const row = jsonObj.row;
              const column = jsonObj.column;
              const score = jsonObj.score;
              updateOpponentScore(score);
              refreshMatrix(row, column, 'hit_miss', payload=='hit'?'destroyed':'');  
            }
          }
      });
      client.subscribe(TOPIC+"/team2", (message) => {

          console.log("Received message2:", message.body);
          const jsonObj = JSON.parse(message.body);
          const type = jsonObj.type;
          const payload = jsonObj.payload;
          if(type=='PLAYERS'){
            updateTeam2Players(payload);
          }
          if(playerSubTeam == 'team2')
          {
            if (type == 'DEPLOY'){
              const row = jsonObj.row;
              const column = jsonObj.column;
              refreshMatrix(row, column, 'ours', payload);
            }else if (type == 'MARK_SELF') {
              const row = jsonObj.row;
              const column = jsonObj.column;
              const score = jsonObj.score;
              updateScore(score);
              refreshMatrix(row, column, 'hit_miss', payload);  
            }else if (type == 'MARK_OPPONENT') {
              const row = jsonObj.row;
              const column = jsonObj.column;
              const score = jsonObj.score;
              updateOpponentScore(score);
              refreshMatrix(row, column, 'hit_miss', payload=='hit'?'destroyed':'');  
            }
          }
      });
      client.publish({
        destination: "/app/joinGame", // Destination to send the message
        body: JSON.stringify({
          type: "JOIN",
          playerName: playerName,
          teamName: teamName,
        }),
      });
    };

    client.activate();

    return () => {
      if (client) {
        client.deactivate();
      }
    };
  }, []);

  const handleSplitTeam = (event)=> {
    client.publish({
      destination: "/app/splitTeam", // Destination to send the message
      body: JSON.stringify({
        type: "JOIN",
        playerName: playerName,
        teamName: teamName,
      }),
    });
  }

  const handleStartGame = (event) => {
    client.publish({
      destination: "/app/startGame", // Destination to send the message
      body: JSON.stringify({
        playerName: playerName,
        teamName: teamName,
      }),
    });
  }

  const handleFinishGame = (event) => {
    const endGame = new window.bootstrap.Modal(document.getElementById("endGame"));
    endGame.show();
  }

  const handleEndGame = (event) => {
    client.publish({
      destination: "/app/endGame", // Destination to send the message
      body: JSON.stringify({
        type: "END_GAME",
        playerName: playerName,
        teamName: teamName,
      }),
    });
  }


  return (
    <>
          {teamSplitDone ? 
          <SubTeams client={client} handleEndGame={handleEndGame} 
          handleStartGame={handleStartGame} 
          handleFinishGame={handleFinishGame} 
          />
          :
          <AboutBattleShips role={role} players={teamPlayers} handleSplitTeam={handleSplitTeam}/>}
    
          <Modal id="gameResult" title="Game Result"
          triggerButton={false}
          triggerButtonType="success"
          needRejectBtn={false}
          acceptLabel="OK"
          confirmFunc={()=>{
            playerUpdate('player', 'role')
            resetAll();
            navigate('/home')
          }}
          body={<GameEnd />} />
    </>
  );
}

export default BSLobby;
