import React from 'react'

export default function GameLegend() {
  return (
    <>
    <div className="container mt-4">
    <div className="legend">
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
