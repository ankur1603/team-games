import React from 'react'
import bsContext from "./context/BSContext";
import {useContext} from 'react';
export default function GameLegend() {
  const battleshipContext = useContext(bsContext);
  const turn = battleshipContext.turn;
  return (
    <>
    <div className="container">
      <div className="mb-2">
      <b>Strike Turn:</b> <span className="badge rounded-pill text-bg-success">{(turn || "").toUpperCase()}</span>
      </div>
    <div className="legend d-flex justify-content-between">
      <div className="legend-item">
        <span className="legend-text">🔥 - You are hit!</span>
      </div>
      <div className="legend-item">
        <span className="legend-text">❌ - Hit!</span>
      </div>
      <div className="legend-item">
        <span className="legend-text">🔘 - Miss!</span>
      </div>
    </div>
    <p id="output" className="mt-3"></p>
  </div>
    </>
  )
}
