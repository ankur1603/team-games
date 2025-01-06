import React from 'react'

function ShipLegend(props) {
  const updateColorSelection = props.updateColorSelection;

  return (
    <>
    <div className="container mt-4">
    <div className="legend">
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#007bff"}}
          onClick={(e)=> {updateColorSelection(e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Carrier(1)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#28a745"}}
          onClick={(e)=> {updateColorSelection(e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Battleship(2)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#ffc107"}}
          onClick={(e)=> {updateColorSelection(e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Cruiser(3)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#dc3545"}}
          onClick={(e)=> {updateColorSelection(e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Submarine(4)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{ "backgroundColor": "#6c757d"}}
          onClick={(e)=> {updateColorSelection(e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Destroyer(5)</span>
      </div>
    </div>
    <p id="output" className="mt-3"></p>
  </div>
    </>
  )
}

export default ShipLegend