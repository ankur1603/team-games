import React from "react";

import { useContext, useRef } from 'react';
import playerContext from "../context/PlayerContext"

export default function LoginScreen(props) {
  const player = useContext(playerContext)
  const playerState = player.state;
  const playerUpdate = player.update;

  const refName = useRef();
  const refTeamName = useRef();

  const handleClick = () => {
    const name = refName.current.value.trim();
    const teamName = refTeamName.current.value.trim();
    if(teamName == null || teamName === ""){
      props.showAlert("Please enter your Team name","warning") 
    }
    else if(name ==null || name === ""){
      props.showAlert("Please enter your name","warning") 
    } else {
      playerUpdate(name, 'name');
      playerUpdate(teamName, 'teamName');
    }

  };

  return (
    <>
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="card">
          <div className="card-header text-bg-primary mb-3">
            Team Games Login
          </div>
          <div className="card-body">
            <ul className="list-group list-group-flush">
              <li className="list-group-item">
                <input
                  type="text"
                  placeholder="Enter your Team name"
                  defaultValue={playerState.teamName}
                  tabindex="1"
                  ref={refTeamName}
                />
              </li>
              <li className="list-group-item">
                <input
                  type="text"
                  placeholder="Enter your name"
                  defaultValue={playerState.name}
                  tabindex="2"
                  ref={refName}
                />
              </li>
              <li className="list-group-item">
                
              </li>
            </ul>
          </div>
          <div className="card-footer text-body-secondary">

          <button type="button" 
                className="btn btn-success"
                tabindex="3"
                onClick={handleClick}>
                  Let the fun begin!!
                </button>
            </div>
        </div>
      </div>
    </>
  );
}
