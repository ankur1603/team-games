import React from "react";
import { useNavigate } from 'react-router-dom';

import { useContext, useEffect } from 'react';
import playerContext from "../context/PlayerContext"

export default function LoginScreen(props) {
  const player = useContext(playerContext)
  let playerState = player.state;
  let playerUpdate = player.update;
  let navigate = useNavigate();

  const handleClick = () => {
    if(playerState.teamName == null || playerState.teamName === ""){
      props.showAlert("Please enter your Team name","warning") 
    }
    else if(playerState.name ==null || playerState.name === ""){
      props.showAlert("Please enter your name","warning") 
    } else {
      navigate('/home')
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
                  onChange={(e) => playerUpdate(e.target.value.trim(),'teamName')}
                />
              </li>
              <li className="list-group-item">
                <input
                  type="text"
                  placeholder="Enter your name"
                  defaultValue={playerState.name}
                  tabindex="2"
                  onChange={(e) => playerUpdate(e.target.value.trim(), 'name')}
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
