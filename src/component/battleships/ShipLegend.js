import React from 'react'

function ShipLegend(props) {
  const updateColorSelection = props.updateColorSelection;

  const handleLegendButtonClick = (event, color) => {
    updateColorSelection(color);
    const legendItem = event.target.closest(".legend-item");

    // Get all legend-item divs
    const legendItems = document.querySelectorAll(".legend .legend-item");
  
    // Remove the classes from all legend-item divs
    legendItems.forEach((item) =>
      item.classList.remove("p-1", "border", "border-2", "rounded", "focus-ring")
    );
  
    // Add the classes to the clicked legend-item div
    legendItem.classList.add("p-1", "border", "border-2", "rounded", "focus-ring");
  
  }

  return (
    <>
    <div className="container mt-1">
    <div className="legend d-flex justify-content-center">
      <div className="legend-item p-1 border border-2 rounded focus-ring">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#007bff"}}
          onClick={(e)=> {handleLegendButtonClick(e, e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Carrier(1)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#28a745"}}
          onClick={(e)=> {handleLegendButtonClick(e, e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Battleship(2)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#ffc107"}}
          onClick={(e)=> {handleLegendButtonClick(e, e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Cruiser(3)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{"backgroundColor": "#dc3545"}}
          onClick={(e)=> {handleLegendButtonClick(e, e.target.style.backgroundColor)}}
        ></button>
        <span className="legend-text">Submarine(4)</span>
      </div>
      <div className="legend-item">
        <button type="button"
          className="legend-box"
          style={{ "backgroundColor": "#6c757d"}}
          onClick={(e)=> {handleLegendButtonClick(e, e.target.style.backgroundColor)}}
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