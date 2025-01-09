import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useContext } from 'react';
import playerContext from "../context/PlayerContext"
import Modal from './Modal';
export default function Navbar(props) {
  const player = useContext(playerContext)
  const playerState = player.state;
  const resetPlayer = player.resetPlayer;
  let navigate = useNavigate();

  const confirmLogout = (e) => {
    e.preventDefault();
    resetPlayer();
    navigate('/')
  }

  return playerState.name == null || playerState.name == "" ? (<></>) : (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home">{props.title}</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
            </ul>
            <span className="navbar-text me-3">
              Welcome, <strong>{playerState.name}</strong> to team {playerState.teamName}  
              <Modal id="staticBackdrop" title="Leaving?" 
              body={`Are you sure? Team ${playerState.teamName} will miss you 😢`} 
              confirmFunc={confirmLogout} 
              acceptLabel="Yes"
              triggerButtonLabel="Logout"
              triggerButtonType="danger"
              />
            </span>
          </div>
        </div>
      </nav>
    </>
  )
}
