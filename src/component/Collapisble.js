import React from "react";

export default function Collapisble(props) {
  return (
    <>
      <div className="accordion" id={props.id}>
        <div className="accordion-item">
          <h2 className="accordion-header">
            <button
              className="accordion-button text-uppercase fs-6"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne">
              {props.title}
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
            {props.players.map((player, index) => {
                    return (
                      <span
                        key={`${player}_${index}`}
                        className="badge rounded-pill text-bg-primary mx-1"
                      >
                        {player}
                      </span>
                    );
                  })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
